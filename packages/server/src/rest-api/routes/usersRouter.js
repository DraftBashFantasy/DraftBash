"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const business_1 = require("@draftbash/business");
const infrastructure_1 = require("@draftbash/infrastructure");
const UsersController_1 = require("../controllers/UsersController");
exports.usersRouter = express_1.default.Router();
const usersRepository = new infrastructure_1.UsersRepository();
const mockDraftsRepository = new infrastructure_1.MockDraftsRepository();
const jwtTokenService = new infrastructure_1.JwtAuthTokensService();
const bcryptService = new infrastructure_1.BcryptService();
const searchUsersByUsernameUseCase = new business_1.SearchUsersByUsernameUseCase(usersRepository);
const createUsersUseCase = new business_1.CreateUsersUseCase(usersRepository, jwtTokenService, bcryptService);
const loginUsersUseCase = new business_1.LoginUsersUseCase(usersRepository, jwtTokenService, bcryptService);
const validateJWTtokensUseCase = new business_1.ValidateJwtAuthTokensUseCase(jwtTokenService);
const getUserMockDraftsUseCase = new business_1.GetUserMockDraftsUseCase(mockDraftsRepository, usersRepository);
const usersController = new UsersController_1.UsersController(createUsersUseCase, validateJWTtokensUseCase, loginUsersUseCase, searchUsersByUsernameUseCase, getUserMockDraftsUseCase);
exports.usersRouter
    .route('/')
    .post((request, response) => usersController.createUser(request, response))
    .get((request, response) => usersController.searchUsersByUsername(request, response));
exports.usersRouter
    .route('/authentication-tokens')
    .post((request, response) => usersController.loginUser(request, response))
    .get((request, response) => usersController.validateJWTtoken(request, response));
exports.usersRouter
    .route('/:user_id/mock-drafts')
    .get((request, response) => usersController.getUserMockDrafts(request, response));
