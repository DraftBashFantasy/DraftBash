import { DraftSettings } from './DraftSettings';
export declare class MockDraft {
    private readonly scheduledByUserId;
    private readonly draftSettings;
    constructor(scheduledByUserId: number, draftSettings: DraftSettings);
    getScheduledByUserId(): number;
    getOrderType(): string;
    getScoringType(): string;
    getPickTimeSeconds(): number | null;
    getTeamCount(): number;
    getPointguardSlots(): number;
    getShootingguardSlots(): number;
    getGuardSlots(): number;
    getSmallforwardSlots(): number;
    getPowerforwardSlots(): number;
    getForwardSlots(): number;
    getCenterSlots(): number;
    getUtilitySlots(): number;
    getBenchSlots(): number;
}
