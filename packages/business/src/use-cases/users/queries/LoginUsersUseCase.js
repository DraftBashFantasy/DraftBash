"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsersUseCase = void 0;
const exceptions_1 = require("../../../exceptions");
// Handles user login business logic.
class LoginUsersUseCase {
    usersRepository;
    jwtAuthTokenService;
    bcryptService;
    constructor(usersRepository, jwtTokenService, bcryptService) {
        this.usersRepository = usersRepository;
        this.jwtAuthTokenService = jwtTokenService;
        this.bcryptService = bcryptService;
    }
    async loginUser(usernameOrEmail, password) {
        const user = await this.usersRepository.getUserByUsernameOrEmail(usernameOrEmail);
        if (user === null) {
            throw new exceptions_1.InvalidUserCredentialsError('Username/email or password are incorrect');
        }
        // Compares the provided password with the hashed password stored in the database.
        const isPasswordCorrect = this.bcryptService.compareSync(password, user.getPassword());
        if (!isPasswordCorrect) {
            throw new exceptions_1.InvalidUserCredentialsError('Username/email or password are incorrect');
        }
        // Generate a JWT authorization token for the authenticated user.
        const jwtToken = this.jwtAuthTokenService.sign(user);
        // Return the generated JWT token.
        return jwtToken;
    }
}
exports.LoginUsersUseCase = LoginUsersUseCase;
