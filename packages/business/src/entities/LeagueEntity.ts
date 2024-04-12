import { BadRequestError } from '../exceptions';
import { LeagueSettings } from '../value-objects';

export class LeagueEntity {
  private leagueId: number;

  private leagueSettings: LeagueSettings;

  constructor(leagueId: number, leagueSettings: LeagueSettings) {
    if (!Number.isInteger(leagueId) || leagueId <= 0) {
      throw new BadRequestError('leagueId is must be a positive integer.');
    }
    this.leagueId = leagueId;
    this.leagueSettings = leagueSettings;
  }

  public getLeagueId(): number {
    return this.leagueId;
  }

  public getLeagueOwnerId(): number {
    return this.leagueSettings.getLeagueOwnerId();
  }

  public getScoringType(): string {
    return this.leagueSettings.getScoringType();
  }

  public getTeamCount(): number {
    return this.leagueSettings.getTeamCount();
  }

}
