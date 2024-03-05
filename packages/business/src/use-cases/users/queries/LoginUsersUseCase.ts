import { IJwtAuthTokensService, IBcryptService, ILoginUsersUseCase } from '../../../../../contracts';
import { UserEntity } from '../../../entities';
import { InvalidUserCredentialsError } from '../../../exceptions';
import { IUsersRepository } from '../../../persistence';

// Handles user login business logic.
export class LoginUsersUseCase implements ILoginUsersUseCase {
    private readonly usersRepository: IUsersRepository;

    private readonly jwtAuthTokenService: IJwtAuthTokensService;

    private readonly bcryptService: IBcryptService;

    constructor(usersRepository: IUsersRepository, jwtTokenService: IJwtAuthTokensService, bcryptService: IBcryptService) {
        this.usersRepository = usersRepository;
        this.jwtAuthTokenService = jwtTokenService;
        this.bcryptService = bcryptService;
    }

    public async loginUser(usernameOrEmail: string, password: string): Promise<string> {
        const user: UserEntity | null = await this.usersRepository.getUserByUsernameOrEmail(usernameOrEmail);

        if (user === null) {
            throw new InvalidUserCredentialsError('Username/email or password are incorrect');
        }

        // Compares the provided password with the hashed password stored in the database.
        const isPasswordCorrect: boolean = this.bcryptService.compareSync(password, user.getPassword());

        if (!isPasswordCorrect) {
            throw new InvalidUserCredentialsError('Username/email or password are incorrect');
        }

        // Generate a JWT authorization token for the authenticated user.
        const jwtToken: string = this.jwtAuthTokenService.sign(user);

        // Return the generated JWT token.
        return jwtToken;
    }
}
