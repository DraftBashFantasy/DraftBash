import { Request, Response } from 'express';
import { BadRequestError } from '../../../../business';
import { GetUserLeaguesUseCase } from '../../../../business/src/use-cases/leagues';
import { LeagueResponse } from '../../../../contracts/src/rest-api/responses';
import { LeagueEntity } from '../../../../business/src/entities';

export class LeaguesController {
    private readonly getUserLeaguesUseCase: GetUserLeaguesUseCase

    constructor(getUserLeaguesUseCase: GetUserLeaguesUseCase) {
        this.getUserLeaguesUseCase = getUserLeaguesUseCase;
    }

    async getUserLeagues(req: Request, res: Response) {
        try {
            const userId: number = Number(req.params.user_id);
            const userLeagues = await this.getUserLeaguesUseCase.execute(userId);
            const userLeagueJsonObjects: LeagueResponse[] = []
            userLeagues.forEach((league: LeagueEntity) => {
                userLeagueJsonObjects.push(league.toJson())
            })
            res.status(200).send(userLeagueJsonObjects);
        } catch (error: unknown) {
            if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
}