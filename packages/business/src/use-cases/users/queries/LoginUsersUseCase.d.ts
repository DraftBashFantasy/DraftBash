import { IJwtAuthTokensService, IBcryptService, ILoginUsersUseCase } from '../../../../../contracts';
import { IUsersRepository } from '../../../persistence';
export declare class LoginUsersUseCase implements ILoginUsersUseCase {
    private readonly usersRepository;
    private readonly jwtAuthTokenService;
    private readonly bcryptService;
    constructor(usersRepository: IUsersRepository, jwtTokenService: IJwtAuthTokensService, bcryptService: IBcryptService);
    loginUser(usernameOrEmail: string, password: string): Promise<string>;
}
