import { LeagueSettingsDTO } from '../../../contracts/src/rest-api/shared';
import { BadRequestError } from '../exceptions';
import { IntegerInterval } from './IntegerInterval';

export class LeagueSettings {

    private readonly scoringType: string;

    private readonly teamCount: number;

    private readonly leagueOwnerId: number;

    constructor(settings: LeagueSettingsDTO) {
        const validatedTeamCount = new IntegerInterval('teamCount', settings.teamCount, 8, 14);
        const scoringTypes = ['points', 'category'];

        if (!scoringTypes.includes(settings.scoringType.toLowerCase())) {
            throw new BadRequestError('Invalid scoring type.');
        }

        if (settings.leagueOwnerId == undefined || settings.leagueOwnerId == null) {
            throw new BadRequestError('leagueOwnerId undefined')
        }

        this.scoringType = settings.scoringType;
        this.teamCount = validatedTeamCount.getValue();
        this.leagueOwnerId = settings.leagueOwnerId;

    }

    public getScoringType(): string {
        return this.scoringType;
    }

    public getTeamCount(): number {
        return this.teamCount;
    }
    
    public getLeagueOwnerId(): number {
        return this.leagueOwnerId;
    }
}