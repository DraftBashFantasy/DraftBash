import { Request, Response } from 'express';
import { ICreateUsersUseCase, IValidateJwtAuthTokensUseCase, ILoginUsersUseCase, ISearchUsersByUsernameUseCase, IGetUserMockDraftsUseCase } from '@draftbash/contracts';
export declare class UsersController {
    private readonly createUsersUsecase;
    private readonly validateJWTtokenUseCase;
    private readonly loginUsersUseCase;
    private readonly searchUsersByUsernameUseCase;
    private readonly getUserMockDraftsUseCase;
    constructor(createUserUseCase: ICreateUsersUseCase, validateJWTtokenUseCase: IValidateJwtAuthTokensUseCase, loginUsersUseCase: ILoginUsersUseCase, searchUsersByUsernameUseCase: ISearchUsersByUsernameUseCase, getUserMockDraftsUseCase: IGetUserMockDraftsUseCase);
    createUser(req: Request, res: Response): Promise<void>;
    loginUser(req: Request, res: Response): Promise<void>;
    validateJWTtoken(req: Request, res: Response): Promise<void>;
    getUserMockDrafts(req: Request, res: Response): Promise<void>;
    searchUsersByUsername(req: Request, res: Response): Promise<void>;
}
