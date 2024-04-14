import { DraftInvite } from '../../../../business';
import { LeagueEntity } from '../../../../business/src/entities';
import { LeagueSettings } from '../../../../business/src/value-objects';
import { ILeaguesRepository } from '../../../../contracts/src/persistence/ILeaguesRepository';
import { DatabaseConnection } from '../DatabaseConnection';


export class LeaguesRepository implements ILeaguesRepository {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection();
    }
    public async getUserLeagues(userId: number): Promise<LeagueEntity[]> {
        
        const leagues = await this.db.query(
            `SELECT league_id, league_owner_id, scoring_type, team_count FROM leagues WHERE 
            league_owner_id = $1`, 
            [userId]
        );
        const leagueEntities: LeagueEntity[] = []
        Array.from(leagues).forEach((league: any) => {
            const leagueEntity = new LeagueEntity(
                league.league_id,
                new LeagueSettings({
                    leagueOwnerId: league.league_owner_id,
                    scoringType: league.scoring_type,
                    teamCount: league.team_count
                }))
            leagueEntities.push(leagueEntity)
        })
        return leagueEntities
    }
}