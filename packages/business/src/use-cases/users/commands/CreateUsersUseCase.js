"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersUseCase = void 0;
const value_objects_1 = require("../../../value-objects");
const exceptions_1 = require("../../../exceptions");
// Handles user registration business logic.
class CreateUsersUseCase {
    userRepository;
    jwtAuthTokenService;
    bcryptService;
    constructor(userRepository, jwtTokenService, bcryptService) {
        this.userRepository = userRepository;
        this.jwtAuthTokenService = jwtTokenService;
        this.bcryptService = bcryptService;
    }
    async create(createUserRequest) {
        // Checks if the username or email already exists in the database.
        const isUsernameUnique = (await this.userRepository.getUserByUsername(createUserRequest.username)) == null;
        const isEmailUnique = (await this.userRepository.getUserByEmail(createUserRequest.email)) == null;
        if (!isUsernameUnique) {
            throw new exceptions_1.BadRequestError('Username must be unique');
        }
        if (!isEmailUnique) {
            throw new exceptions_1.BadRequestError('Email must be unique');
        }
        // Hashes the user's password with bcrypt.
        const bcryptPassword = this.bcryptService.hashSync(createUserRequest.password);
        // Creates a new user credentials object, which applies basic validation checks on the credentials.
        const userCredentials = new value_objects_1.UserCredentials({
            username: createUserRequest.username,
            email: createUserRequest.email,
            password: bcryptPassword,
        });
        // Inserts the user into the database. That user is then returned back.
        const createdUser = await this.userRepository.insertUser(userCredentials);
        /*
        Signs and returns a signed JWT token with an expiration date.
        Used for immediate authorization after a user is created.
        */
        const jwtToken = this.jwtAuthTokenService.sign(createdUser);
        return jwtToken;
    }
}
exports.CreateUsersUseCase = CreateUsersUseCase;
