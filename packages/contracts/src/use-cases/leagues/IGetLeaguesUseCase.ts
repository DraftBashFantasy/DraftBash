import { LeagueResponse } from '../../rest-api/responses';

export interface IGetLeaguesUseCase {
    getLeagues(userId: number): Promise<LeagueResponse[]>;
}