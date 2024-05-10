import { DraftSettingsDTO } from '../../../contracts/src/rest-api/shared/DraftSettingsDTO';
import { BadRequestError } from '../exceptions';
import { IntegerInterval } from './IntegerInterval';

export class DraftSettings {
    private readonly orderType: string;

    private readonly scoringType: string;

    private readonly pickTimeSeconds: IntegerInterval | null;

    private readonly teamCount: IntegerInterval;

    private readonly pointguardSlots: IntegerInterval;

    private readonly shootingguardSlots: IntegerInterval;

    private readonly guardSlots: IntegerInterval;

    private readonly smallforwardSlots: IntegerInterval;

    private readonly powerforwardSlots: IntegerInterval;

    private readonly forwardSlots: IntegerInterval;

    private readonly centerSlots: IntegerInterval;

    private readonly utilitySlots: IntegerInterval;

    private readonly benchSlots: IntegerInterval;

    private readonly teamSize: number;

    constructor(settings: DraftSettingsDTO) {
        const orderTypes = ['snake', 'linear'];
        const scoringTypes = ['points', 'category'];

        if (settings.orderType === undefined || settings.scoringType === undefined) {
            throw new BadRequestError('Incorrectly formed request.');
        }

        if (!orderTypes.includes(settings.orderType)) {
            throw new BadRequestError('Invalid order type.');
        }

        if (!scoringTypes.includes(settings.scoringType)) {
            throw new BadRequestError('Invalid scoring type.');
        }

        if (settings.pickTimeSeconds == null) {
            this.pickTimeSeconds = null;
        } else {
            this.pickTimeSeconds = new IntegerInterval('pickTimeSeconds', settings.pickTimeSeconds, 30, 180);
        }
        const teamSize = settings.teamCount
            + settings.benchSlots
            + settings.utilitySlots
            + settings.pointguardSlots
            + settings.shootingguardSlots
            + settings.guardSlots
            + settings.smallforwardSlots
            + settings.powerforwardSlots
            + settings.forwardSlots
            + settings.centerSlots;

        if (teamSize <= 0) {
            throw new BadRequestError('Team size must be greater than 0.');
        }

        this.teamSize = teamSize;
        this.orderType = settings.orderType;
        this.scoringType = settings.scoringType;
        this.teamCount = new IntegerInterval('teamCount', settings.teamCount, 4, 14);
        this.pointguardSlots = new IntegerInterval('pointguardSlots', settings.pointguardSlots, 0, 1);
        this.shootingguardSlots = new IntegerInterval('shootingguardSlots', settings.shootingguardSlots, 0, 1);
        this.guardSlots = new IntegerInterval('guardSlots', settings.guardSlots, 0, 1);
        this.smallforwardSlots = new IntegerInterval('smallforwardSlots', settings.smallforwardSlots, 0, 1);
        this.powerforwardSlots = new IntegerInterval('powerforwardSlots', settings.powerforwardSlots, 0, 1);
        this.forwardSlots = new IntegerInterval('forwardSlots', settings.forwardSlots, 0, 1);
        this.centerSlots = new IntegerInterval('centerSlots', settings.centerSlots, 0, 1);
        this.utilitySlots = new IntegerInterval('utilitySlots', settings.utilitySlots, 0, 4);
        this.benchSlots = new IntegerInterval('benchSlots', settings.benchSlots, 0, 4);
    }

    public getOrderType(): string {
        return this.orderType;
    }

    public getScoringType(): string {
        return this.scoringType;
    }

    public getPickTimeSeconds(): number | null {
        return this.pickTimeSeconds ? this.pickTimeSeconds.getValue() : null;
    }

    public getTeamCount(): number {
        return this.teamCount.getValue();
    }

    public getPointguardSlots(): number {
        return this.pointguardSlots.getValue();
    }

    public getShootingguardSlots(): number {
        return this.shootingguardSlots.getValue();
    }

    public getGuardSlots(): number {
        return this.guardSlots.getValue();
    }

    public getSmallforwardSlots(): number {
        return this.smallforwardSlots.getValue();
    }

    public getPowerforwardSlots(): number {
        return this.powerforwardSlots.getValue();
    }

    public getForwardSlots(): number {
        return this.forwardSlots.getValue();
    }

    public getCenterSlots(): number {
        return this.centerSlots.getValue();
    }

    public getUtilitySlots(): number {
        return this.utilitySlots.getValue();
    }

    public getBenchSlots(): number {
        return this.benchSlots.getValue();
    }

    public getTeamSize(): number {
        return this.teamSize;
    }
}
