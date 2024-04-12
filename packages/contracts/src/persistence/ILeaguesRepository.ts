import { LeagueEntity } from '../../../business/src/entities';

export interface ILeaguesRepository {
    getUserLeagues(userId: number): Promise<LeagueEntity[]>;
}
