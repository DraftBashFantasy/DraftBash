import { Request, Response } from 'express';
import {
    ICreateUsersUseCase,
    IValidateJwtAuthTokensUseCase,
    ILoginUsersUseCase,
    ISearchUsersByUsernameUseCase,
    IGetUserMockDraftsUseCase,
    CreateUserRequest,
    UserResponse,
    MockDraftResponse,
} from '../../../../contracts';
import {
    UserAlreadyExistsError,
    BadRequestError,
    UserNotFoundByUsernameError,
    InvalidJwtTokenError,
    InvalidUserCredentialsError,
} from '../../../../business';

export class UsersController {
    private readonly createUsersUsecase: ICreateUsersUseCase;

    private readonly validateJWTtokenUseCase: IValidateJwtAuthTokensUseCase;

    private readonly loginUsersUseCase: ILoginUsersUseCase;

    private readonly searchUsersByUsernameUseCase: ISearchUsersByUsernameUseCase;

    private readonly getUserMockDraftsUseCase: IGetUserMockDraftsUseCase;

    constructor(
        createUserUseCase: ICreateUsersUseCase,
        validateJWTtokenUseCase: IValidateJwtAuthTokensUseCase,
        loginUsersUseCase: ILoginUsersUseCase,
        searchUsersByUsernameUseCase: ISearchUsersByUsernameUseCase,
        getUserMockDraftsUseCase: IGetUserMockDraftsUseCase,
    ) {
        this.createUsersUsecase = createUserUseCase;
        this.validateJWTtokenUseCase = validateJWTtokenUseCase;
        this.loginUsersUseCase = loginUsersUseCase;
        this.searchUsersByUsernameUseCase = searchUsersByUsernameUseCase;
        this.getUserMockDraftsUseCase = getUserMockDraftsUseCase;
    }

    async createUser(req: Request, res: Response) {
        try {
            const createUserRequest: CreateUserRequest = req.body;
            const jwtAuthorizationToken: string = await this.createUsersUsecase.create(createUserRequest);
            res.status(201).send({ jwtToken: jwtAuthorizationToken });
        } catch (error: unknown) {
            if (error instanceof UserAlreadyExistsError) {
                res.status(409).send({
                    errorName: error.name,
                    error: error.message,
                    isUsernameUnique: error.getIsUsernameUnique(),
                    isEmailUnique: error.getIsEmailUnique(),
                });
            } else if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }

    async loginUser(req: Request, res: Response) {
        try {
            const usernameOrEmail: string = req.body.usernameOrEmail as string;
            const password: string = req.body.password as string;
            const jwtAuthorizationToken: string = await this.loginUsersUseCase.loginUser(
                usernameOrEmail,
                password,
            );
            res.status(200).send({ jwtToken: jwtAuthorizationToken });
        } catch (error: unknown) {
            if (error instanceof InvalidUserCredentialsError) {
                res.status(401).send({ errorName: error.name, error: error.message });
            } else if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }

    async validateJWTtoken(req: Request, res: Response) {
        try {
            const authorizationHeader: string | undefined = req.headers.authorization;
            if (authorizationHeader === undefined) {
                res.status(401).json({ error: 'Unauthorized: Token is missing' });
            } else {
                const jwtAuthorizationToken: string = authorizationHeader.split(' ')[1];
                const validatedUser: UserResponse = await this.validateJWTtokenUseCase.validateJWTtoken(jwtAuthorizationToken);
                res.status(200).send(validatedUser);
            }
        } catch (error: unknown) {
            if (error instanceof InvalidJwtTokenError) {
                res.status(403).send({ errorName: error.name, error: error.message });
            } else if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }

    async getUserMockDrafts(req: Request, res: Response) {
        try {
            const userId: number = Number(req.params.user_id);
            const userMockDrafts: MockDraftResponse[] = await this.getUserMockDraftsUseCase.getUserMockDrafts(userId);
            res.status(200).send(userMockDrafts);
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

    async searchUsersByUsername(req: Request, res: Response) {
        try {
            const searchedUsername: string = req.query.searched_username as string;
            const userResponse: UserResponse = await this.searchUsersByUsernameUseCase.search(searchedUsername);
            res.status(200).send(userResponse);
        } catch (error: unknown) {
            if (error instanceof UserNotFoundByUsernameError) {
                res.status(404).send({
                    error: error.message,
                    similarUsernameUsers: error.getSimilarUsernameUsers(),
                });
            } else if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
}
