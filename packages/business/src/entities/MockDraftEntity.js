"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDraftEntity = void 0;
const exceptions_1 = require("../exceptions");
class MockDraftEntity {
    draftId;
    mockDraft;
    constructor(draftId, mockDraft) {
        if (!Number.isInteger(draftId) || draftId <= 0) {
            throw new exceptions_1.BadRequestError('draftId must be a positive integer.');
        }
        this.draftId = draftId;
        this.mockDraft = mockDraft;
    }
    getDraftId() {
        return this.draftId;
    }
    getScheduledByUserId() {
        return this.mockDraft.getScheduledByUserId();
    }
    getOrderType() {
        return this.mockDraft.getOrderType();
    }
    getScoringType() {
        return this.mockDraft.getScoringType();
    }
    getPickTimeSeconds() {
        return this.mockDraft.getPickTimeSeconds();
    }
    getTeamCount() {
        return this.mockDraft.getTeamCount();
    }
    getPointguardSlots() {
        return this.mockDraft.getPointguardSlots();
    }
    getShootingguardSlots() {
        return this.mockDraft.getShootingguardSlots();
    }
    getSmallforwardSlots() {
        return this.mockDraft.getSmallforwardSlots();
    }
    getPowerforwardSlots() {
        return this.mockDraft.getPowerforwardSlots();
    }
    getCenterSlots() {
        return this.mockDraft.getCenterSlots();
    }
    getGuardSlots() {
        return this.mockDraft.getGuardSlots();
    }
    getForwardSlots() {
        return this.mockDraft.getForwardSlots();
    }
    getUtilitySlots() {
        return this.mockDraft.getUtilitySlots();
    }
    getBenchSlots() {
        return this.mockDraft.getBenchSlots();
    }
}
exports.MockDraftEntity = MockDraftEntity;
