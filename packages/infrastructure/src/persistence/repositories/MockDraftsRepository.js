"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDraftsRepository = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const business_1 = require("../../../../business");
const DatabaseConnection_1 = require("../DatabaseConnection");
class MockDraftsRepository {
    db;
    constructor() {
        this.db = new DatabaseConnection_1.DatabaseConnection();
    }
    async getUserMockDrafts(userId) {
        const drafts = await this.db.query(`SELECT draft_id, order_type, scoring_type, pick_time_seconds, team_count, 
            pointguard_slots, shootingguard_slots, guard_slots, smallforward_slots, powerforward_slots,
            forward_slots, center_slots, utility_slots, bench_slots, scheduled_by_user_id
            FROM drafts WHERE draft_id IN (
            SELECT draft_id FROM draft_users WHERE user_id = $1
            )`, [userId]);
        const mockDraftEntities = drafts.map((draft) => {
            const draftSettings = new business_1.DraftSettings({
                orderType: draft.order_type,
                scoringType: draft.scoring_type,
                pickTimeSeconds: draft.pick_time_seconds,
                teamCount: draft.team_count,
                pointguardSlots: draft.pointguard_slots,
                shootingguardSlots: draft.shootingguard_slots,
                guardSlots: draft.guard_slots,
                smallforwardSlots: draft.smallforward_slots,
                powerforwardSlots: draft.powerforward_slots,
                forwardSlots: draft.forward_slots,
                centerSlots: draft.center_slots,
                utilitySlots: draft.utility_slots,
                benchSlots: draft.bench_slots,
            });
            const mockDraft = new business_1.MockDraft(draft.scheduled_by_user_id, draftSettings);
            return new business_1.MockDraftEntity(draft.draft_id, mockDraft);
        });
        return mockDraftEntities;
    }
    async getMockDraft(draftId) {
        const draft = await this.db.query(`SELECT draft_id, order_type, scoring_type, pick_time_seconds, team_count, 
            pointguard_slots, shootingguard_slots, guard_slots, smallforward_slots, powerforward_slots,
            forward_slots, center_slots, utility_slots, bench_slots, scheduled_by_user_id
            FROM drafts WHERE draft_id = $1`, [draftId]);
        if (draft.length === 0) {
            return null;
        }
        const draftSettings = new business_1.DraftSettings({
            orderType: draft[0].order_type,
            scoringType: draft[0].scoring_type,
            pickTimeSeconds: draft[0].pick_time_seconds,
            teamCount: draft[0].team_count,
            pointguardSlots: draft[0].pointguard_slots,
            shootingguardSlots: draft[0].shootingguard_slots,
            guardSlots: draft[0].guard_slots,
            smallforwardSlots: draft[0].smallforward_slots,
            powerforwardSlots: draft[0].powerforward_slots,
            forwardSlots: draft[0].forward_slots,
            centerSlots: draft[0].center_slots,
            utilitySlots: draft[0].utility_slots,
            benchSlots: draft[0].bench_slots,
        });
        const mockDraft = new business_1.MockDraft(draft[0].scheduled_by_user_id, draftSettings);
        return new business_1.MockDraftEntity(draft[0].draft_id, mockDraft);
    }
    async deleteMockDraft(draftId) {
        await this.db.query('DELETE FROM drafts WHERE draft_id = $1', [draftId]);
    }
    async updateMockDraft(draftId, draftSettings, draftOrder) {
        try {
            // Start a database transaction
            await this.db.query('BEGIN');
            // Update draft settings in the "drafts" table
            await this.db.query(`UPDATE drafts
                SET order_type = $1, scoring_type = $2, pick_time_seconds = $3, team_count = $4,
                pointguard_slots = $5, shootingguard_slots = $6, guard_slots = $7, smallforward_slots = $8,
                powerforward_slots = $9, forward_slots = $10, center_slots = $11, utility_slots = $12,
                bench_slots = $13
                WHERE draft_id = $14
            `, [
                draftSettings.getOrderType(),
                draftSettings.getScoringType(),
                draftSettings.getPickTimeSeconds(),
                draftSettings.getTeamCount(),
                draftSettings.getPointguardSlots(),
                draftSettings.getShootingguardSlots(),
                draftSettings.getGuardSlots(),
                draftSettings.getSmallforwardSlots(),
                draftSettings.getPowerforwardSlots(),
                draftSettings.getForwardSlots(),
                draftSettings.getCenterSlots(),
                draftSettings.getUtilitySlots(),
                draftSettings.getBenchSlots(),
                draftId,
            ]);
            // Retrieve previous user draft positions for the specified draft
            const previousUserDraftPositions = await this.db.query(`SELECT DISTINCT user_id, team_number 
                FROM draft_orders 
                WHERE draft_id = $1
                AND user_id IN (SELECT user_id FROM draft_users WHERE draft_id = $1),
                ORDER BY team_number ASC`, [draftId]);
            // Delete existing draft order rows for the specified draft
            await this.db.query('DELETE FROM draft_orders WHERE draft_id = $1', [draftId]);
            // Insert new draft orders for the specified draft in bulk.
            const draftOrderValues = draftOrder
                .map((teamNumber, index) => `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`)
                .join(', ');
            await this.db.query(`INSERT INTO draft_orders (team_number, draft_id, pick_number)
                VALUES ${draftOrderValues}`, draftOrder.flatMap((teamNumber, index) => [teamNumber, draftId, index + 1]));
            for (let i = 0; i < previousUserDraftPositions.length; i++) {
                await this.db.query(`UPDATE draft_orders
                    SET user_id = $1
                    WHERE team_number = $2 AND draft_id = $3`, [
                    previousUserDraftPositions[i].user_id,
                    previousUserDraftPositions[i].team_number,
                    draftId,
                ]);
            }
            // Commit the transaction if everything succeeds
            await this.db.query('COMMIT');
        }
        catch (error) {
            // Rollback the transaction in case of an error and rethrow the error
            await this.db.query('ROLLBACK');
            throw error;
        }
    }
    async insertMockDraft(mockDraft, draftOrder) {
        try {
            await this.db.query('BEGIN');
            // Insert draft
            const draftInsertResult = await this.db.query(`INSERT INTO drafts (scheduled_by_user_id, order_type, scoring_type, pick_time_seconds, 
                team_count, pointguard_slots, shootingguard_slots, guard_slots, smallforward_slots, 
                powerforward_slots, forward_slots, center_slots, utility_slots, bench_slots)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING draft_id;
        `, [
                mockDraft.getScheduledByUserId(),
                mockDraft.getOrderType(),
                mockDraft.getScoringType(),
                mockDraft.getPickTimeSeconds(),
                mockDraft.getTeamCount(),
                mockDraft.getPointguardSlots(),
                mockDraft.getShootingguardSlots(),
                mockDraft.getGuardSlots(),
                mockDraft.getSmallforwardSlots(),
                mockDraft.getPowerforwardSlots(),
                mockDraft.getForwardSlots(),
                mockDraft.getCenterSlots(),
                mockDraft.getUtilitySlots(),
                mockDraft.getBenchSlots(),
            ]);
            const draftId = draftInsertResult[0].draft_id;
            // Bulk insert draft orders
            const draftOrderValues = draftOrder
                .map((teamNumber, index) => `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`)
                .join(', ');
            await this.db.query(`INSERT INTO draft_orders (team_number, draft_id, pick_number)
                VALUES ${draftOrderValues}`, draftOrder.flatMap((teamNumber, index) => [
                teamNumber,
                draftId,
                index + 1,
            ]));
            // Commit the transaction
            await this.db.query('COMMIT');
            return draftId;
        }
        catch (error) {
            // Rollback the transaction on error
            await this.db.query('ROLLBACK');
            throw error;
        }
    }
}
exports.MockDraftsRepository = MockDraftsRepository;
