import { DraftSettings } from './DraftSettings';
import { BadRequestError } from '../exceptions';

export class MockDraft {
    private readonly scheduledByUserId: number;

    private readonly draftSettings: DraftSettings;

    constructor(scheduledByUserId: number, draftSettings: DraftSettings) {
        if (!Number.isInteger(scheduledByUserId) || scheduledByUserId <= 0) {
            throw new BadRequestError('scheduledByUserId must be an integer greater than 0.');
        }
        this.scheduledByUserId = scheduledByUserId;

        this.draftSettings = draftSettings;
    }

    public getScheduledByUserId(): number {
        return this.scheduledByUserId;
    }

    public getOrderType(): string {
        return this.draftSettings.getOrderType();
    }

    public getScoringType(): string {
        return this.draftSettings.getScoringType();
    }

    public getPickTimeSeconds(): number | null {
        return this.draftSettings.getPickTimeSeconds();
    }

    public getTeamCount(): number {
        return this.draftSettings.getTeamCount();
    }

    public getPointguardSlots(): number {
        return this.draftSettings.getPointguardSlots();
    }

    public getShootingguardSlots(): number {
        return this.draftSettings.getShootingguardSlots();
    }

    public getGuardSlots(): number {
        return this.draftSettings.getGuardSlots();
    }

    public getSmallforwardSlots(): number {
        return this.draftSettings.getSmallforwardSlots();
    }

    public getPowerforwardSlots(): number {
        return this.draftSettings.getPowerforwardSlots();
    }

    public getForwardSlots(): number {
        return this.draftSettings.getForwardSlots();
    }

    public getCenterSlots(): number {
        return this.draftSettings.getCenterSlots();
    }

    public getUtilitySlots(): number {
        return this.draftSettings.getUtilitySlots();
    }

    public getBenchSlots(): number {
        return this.draftSettings.getBenchSlots();
    }
}
