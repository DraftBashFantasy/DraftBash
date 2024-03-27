"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const business_1 = require("@draftbash/business");
class UsersController {
    createUsersUsecase;
    validateJWTtokenUseCase;
    loginUsersUseCase;
    searchUsersByUsernameUseCase;
    getUserMockDraftsUseCase;
    constructor(createUserUseCase, validateJWTtokenUseCase, loginUsersUseCase, searchUsersByUsernameUseCase, getUserMockDraftsUseCase) {
        this.createUsersUsecase = createUserUseCase;
        this.validateJWTtokenUseCase = validateJWTtokenUseCase;
        this.loginUsersUseCase = loginUsersUseCase;
        this.searchUsersByUsernameUseCase = searchUsersByUsernameUseCase;
        this.getUserMockDraftsUseCase = getUserMockDraftsUseCase;
    }
    async createUser(req, res) {
        try {
            const createUserRequest = req.body;
            const jwtAuthorizationToken = await this.createUsersUsecase.create(createUserRequest);
            res.status(201).send({ jwtToken: jwtAuthorizationToken });
        }
        catch (error) {
            if (error instanceof business_1.UserAlreadyExistsError) {
                res.status(409).send({
                    errorName: error.name,
                    error: error.message,
                    isUsernameUnique: error.getIsUsernameUnique(),
                    isEmailUnique: error.getIsEmailUnique(),
                });
            }
            else if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async loginUser(req, res) {
        try {
            const usernameOrEmail = req.body.usernameOrEmail;
            const password = req.body.password;
            const jwtAuthorizationToken = await this.loginUsersUseCase.loginUser(usernameOrEmail, password);
            res.status(200).send({ jwtToken: jwtAuthorizationToken });
        }
        catch (error) {
            if (error instanceof business_1.InvalidUserCredentialsError) {
                res.status(401).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async validateJWTtoken(req, res) {
        try {
            const authorizationHeader = req.headers.authorization;
            if (authorizationHeader === undefined) {
                res.status(401).json({ error: 'Unauthorized: Token is missing' });
            }
            else {
                const jwtAuthorizationToken = authorizationHeader.split(' ')[1];
                const validatedUser = await this.validateJWTtokenUseCase.validateJWTtoken(jwtAuthorizationToken);
                res.status(200).send(validatedUser);
            }
        }
        catch (error) {
            if (error instanceof business_1.InvalidJwtTokenError) {
                res.status(403).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async getUserMockDrafts(req, res) {
        try {
            const userId = Number(req.params.user_id);
            const userMockDrafts = await this.getUserMockDraftsUseCase.getUserMockDrafts(userId);
            res.status(200).send(userMockDrafts);
        }
        catch (error) {
            if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async searchUsersByUsername(req, res) {
        try {
            const searchedUsername = req.query.searched_username;
            const userResponse = await this.searchUsersByUsernameUseCase.search(searchedUsername);
            res.status(200).send(userResponse);
        }
        catch (error) {
            if (error instanceof business_1.UserNotFoundByUsernameError) {
                res.status(404).send({
                    error: error.message,
                    similarUsernameUsers: error.getSimilarUsernameUsers(),
                });
            }
            else if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
}
exports.UsersController = UsersController;
