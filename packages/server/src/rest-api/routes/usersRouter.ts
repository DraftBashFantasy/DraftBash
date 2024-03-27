import express, { Request, Response } from 'express';
import {
    CreateUsersUseCase,
    SearchUsersByUsernameUseCase,
    LoginUsersUseCase,
    ValidateJwtAuthTokensUseCase,
    GetUserMockDraftsUseCase,
} from '@draftbash/business';
import { UsersRepository, MockDraftsRepository, BcryptService, JwtAuthTokensService } from '@draftbash/infrastructure';
import { UsersController } from '../controllers/UsersController';

export const usersRouter = express.Router();

const usersRepository = new UsersRepository();
const mockDraftsRepository = new MockDraftsRepository();
const jwtTokenService = new JwtAuthTokensService();
const bcryptService = new BcryptService();

const searchUsersByUsernameUseCase = new SearchUsersByUsernameUseCase(usersRepository);
const createUsersUseCase = new CreateUsersUseCase(usersRepository, jwtTokenService, bcryptService);
const loginUsersUseCase = new LoginUsersUseCase(usersRepository, jwtTokenService, bcryptService);
const validateJWTtokensUseCase = new ValidateJwtAuthTokensUseCase(jwtTokenService);
const getUserMockDraftsUseCase = new GetUserMockDraftsUseCase(mockDraftsRepository, usersRepository);

const usersController = new UsersController(
    createUsersUseCase,
    validateJWTtokensUseCase,
    loginUsersUseCase,
    searchUsersByUsernameUseCase,
    getUserMockDraftsUseCase,
);

usersRouter
    .route('/')
    .post((request: Request, response: Response) => usersController.createUser(request, response))
    .get((request: Request, response: Response) => usersController.searchUsersByUsername(request, response));

usersRouter
    .route('/authentication-tokens')
    .post((request: Request, response: Response) => usersController.loginUser(request, response))
    .get((request: Request, response: Response) => usersController.validateJWTtoken(request, response));

usersRouter
    .route('/:user_id/mock-drafts')
    .get((request: Request, response: Response) => usersController.getUserMockDrafts(request, response));
