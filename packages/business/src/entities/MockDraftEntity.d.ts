import { MockDraft } from '../value-objects';
export declare class MockDraftEntity {
    private draftId;
    private mockDraft;
    constructor(draftId: number, mockDraft: MockDraft);
    getDraftId(): number;
    getScheduledByUserId(): number;
    getOrderType(): string;
    getScoringType(): string;
    getPickTimeSeconds(): number | null;
    getTeamCount(): number;
    getPointguardSlots(): number;
    getShootingguardSlots(): number;
    getSmallforwardSlots(): number;
    getPowerforwardSlots(): number;
    getCenterSlots(): number;
    getGuardSlots(): number;
    getForwardSlots(): number;
    getUtilitySlots(): number;
    getBenchSlots(): number;
}
