import express, { Request, Response } from 'express';
import { LeaguesRepository } from '../../../../infrastructure/src/persistence/repositories/LeaguesRepository';
import { GetUserLeaguesUseCase } from '../../../../business/src/use-cases/leagues';
import { LeaguesController } from '../controllers/LeaguesController';

export const leaguesRouter = express.Router();

const leaguesRepository = new LeaguesRepository();

const getUserLeaguesUseCase = new GetUserLeaguesUseCase(leaguesRepository);

const leaguesController = new LeaguesController(getUserLeaguesUseCase);

leaguesRouter
    .route('/users/:user_id')
    .get((request: Request, response: Response) => leaguesController.getUserLeagues(request, response));