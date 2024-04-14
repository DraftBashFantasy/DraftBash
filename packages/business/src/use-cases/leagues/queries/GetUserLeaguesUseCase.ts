import { ILeaguesRepository } from "../../../../../contracts/src/persistence/ILeaguesRepository";
import { LeagueEntity } from "../../../entities";


export class GetUserLeaguesUseCase {

    private readonly leaguesRepository: ILeaguesRepository;

    constructor(leaguesRepository: ILeaguesRepository) {
        this.leaguesRepository = leaguesRepository;
    }

    public async execute(userId: number): Promise<LeagueEntity[]> {
        const leagueEntities = await this.leaguesRepository.getUserLeagues(userId);
        return leagueEntities
    }
}
