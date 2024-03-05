import { BadRequestError } from '../exceptions';
import { MockDraft } from '../value-objects';

export class MockDraftEntity {
    private draftId: number;

    private mockDraft: MockDraft;

    constructor(draftId: number, mockDraft: MockDraft) {
        if (!Number.isInteger(draftId) || draftId <= 0) {
            throw new BadRequestError('draftId must be a positive integer.');
        }
        this.draftId = draftId;
        this.mockDraft = mockDraft;
    }

    public getDraftId(): number {
        return this.draftId;
    }

    public getScheduledByUserId(): number {
        return this.mockDraft.getScheduledByUserId();
    }

    public getOrderType(): string {
        return this.mockDraft.getOrderType();
    }

    public getScoringType(): string {
        return this.mockDraft.getScoringType();
    }

    public getPickTimeSeconds(): number | null {
        return this.mockDraft.getPickTimeSeconds();
    }

    public getTeamCount(): number {
        return this.mockDraft.getTeamCount();
    }

    public getPointguardSlots(): number {
        return this.mockDraft.getPointguardSlots();
    }

    public getShootingguardSlots(): number {
        return this.mockDraft.getShootingguardSlots();
    }

    public getSmallforwardSlots(): number {
        return this.mockDraft.getSmallforwardSlots();
    }

    public getPowerforwardSlots(): number {
        return this.mockDraft.getPowerforwardSlots();
    }

    public getCenterSlots(): number {
        return this.mockDraft.getCenterSlots();
    }

    public getGuardSlots(): number {
        return this.mockDraft.getGuardSlots();
    }

    public getForwardSlots(): number {
        return this.mockDraft.getForwardSlots();
    }

    public getUtilitySlots(): number {
        return this.mockDraft.getUtilitySlots();
    }

    public getBenchSlots(): number {
        return this.mockDraft.getBenchSlots();
    }
}
