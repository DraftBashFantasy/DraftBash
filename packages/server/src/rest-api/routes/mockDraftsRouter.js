"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDraftsRouter = void 0;
const express_1 = __importDefault(require("express"));
const business_1 = require("@draftbash/business");
const infrastructure_1 = require("@draftbash/infrastructure");
const controllers_1 = require("../controllers");
exports.mockDraftsRouter = express_1.default.Router();
const draftsRepository = new infrastructure_1.MockDraftsRepository();
const draftUsersRepository = new infrastructure_1.DraftUsersRepository();
const usersRepository = new infrastructure_1.UsersRepository();
const createMockDraftsUseCase = new business_1.CreateMockDraftsUseCase(draftsRepository, draftUsersRepository);
const updateMockDraftsUseCase = new business_1.UpdateMockDraftsUseCase(draftsRepository);
const deleteMockDraftsUseCase = new business_1.DeleteMockDraftsUseCase(draftsRepository);
const getMockDraftsUseCase = new business_1.GetMockDraftsUseCase(draftsRepository, usersRepository);
const mockDraftsController = new controllers_1.MockDraftsController(createMockDraftsUseCase, updateMockDraftsUseCase, deleteMockDraftsUseCase, getMockDraftsUseCase);
exports.mockDraftsRouter
    .route('/')
    .post((request, response) => mockDraftsController.createMockDraft(request, response));
exports.mockDraftsRouter
    .route('/:draftId')
    .get((request, response) => mockDraftsController.getMockDraft(request, response))
    .put((request, response) => mockDraftsController.updateMockDraft(request, response))
    .delete((request, response) => mockDraftsController.deleteMockDraft(request, response));
