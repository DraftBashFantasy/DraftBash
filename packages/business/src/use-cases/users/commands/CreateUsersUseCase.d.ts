import { IJwtAuthTokensService, IBcryptService, CreateUserRequest, ICreateUsersUseCase } from '../../../../../contracts';
import { IUsersRepository } from '../../../persistence';
export declare class CreateUsersUseCase implements ICreateUsersUseCase {
    private readonly userRepository;
    private readonly jwtAuthTokenService;
    private readonly bcryptService;
    constructor(userRepository: IUsersRepository, jwtTokenService: IJwtAuthTokensService, bcryptService: IBcryptService);
    create(createUserRequest: CreateUserRequest): Promise<string>;
}
