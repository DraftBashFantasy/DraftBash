import {
    IJwtAuthTokensService,
    IBcryptService,
    CreateUserRequest,
    ICreateUsersUseCase,
} from '../../../../../contracts';
import { UserEntity } from '../../../entities';
import { IUsersRepository } from '../../../../../contracts/src/persistence';
import { UserCredentials } from '../../../value-objects';
import { BadRequestError } from '../../../exceptions';

// Handles user registration business logic.
export class CreateUsersUseCase implements ICreateUsersUseCase {
    private readonly userRepository: IUsersRepository;

    private readonly jwtAuthTokenService: IJwtAuthTokensService;

    private readonly bcryptService: IBcryptService;

    constructor(
        userRepository: IUsersRepository,
        jwtTokenService: IJwtAuthTokensService,
        bcryptService: IBcryptService,
    ) {
        this.userRepository = userRepository;
        this.jwtAuthTokenService = jwtTokenService;
        this.bcryptService = bcryptService;
    }

    async create(createUserRequest: CreateUserRequest): Promise<string> {
        // Checks if the username or email already exists in the database.
        const isUsernameUnique: boolean = (await this.userRepository.getUserByUsername(createUserRequest.username)) == null;
        const isEmailUnique: boolean = (await this.userRepository.getUserByEmail(createUserRequest.email)) == null;

        if (!isUsernameUnique) {
            throw new BadRequestError('Username must be unique');
        }
        if (!isEmailUnique) {
            throw new BadRequestError('Email must be unique');
        }

        // Hashes the user's password with bcrypt.
        const bcryptPassword: string = this.bcryptService.hashSync(createUserRequest.password);

        // Creates a new user credentials object, which applies basic validation checks on the credentials.
        const userCredentials = new UserCredentials({
            username: createUserRequest.username,
            email: createUserRequest.email,
            password: bcryptPassword,
        });

        // Inserts the user into the database. That user is then returned back.
        const createdUser: UserEntity = await this.userRepository.insertUser(userCredentials);

        /*
        Signs and returns a signed JWT token with an expiration date.
        Used for immediate authorization after a user is created.
        */
        const jwtToken: string = this.jwtAuthTokenService.sign(createdUser);
        return jwtToken;
    }
}
