"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMockDraftsUseCase = void 0;
const services_1 = require("../../../services");
const value_objects_1 = require("../../../value-objects");
class CreateMockDraftsUseCase {
    mockDraftsRepository;
    draftUsersRepository;
    draftOrderGeneratorFactory;
    constructor(mockDraftsRepository, draftUsersRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
        this.draftUsersRepository = draftUsersRepository;
        this.draftOrderGeneratorFactory = new services_1.DraftOrderGeneratorFactory();
    }
    async createMockDraft(createMockDraftRequest) {
        const mockDraftSettings = new value_objects_1.DraftSettings(createMockDraftRequest.draftSettings);
        const mockDraft = new value_objects_1.MockDraft(createMockDraftRequest.scheduledByUserId, mockDraftSettings);
        const draftOrderGenerator = this.draftOrderGeneratorFactory.getDraftOrderGenerator(mockDraftSettings.getOrderType());
        const draftOrder = draftOrderGenerator.generate(mockDraftSettings.getTeamCount(), mockDraftSettings.getTeamSize());
        const draftId = await this.mockDraftsRepository.insertMockDraft(mockDraft, draftOrder);
        const startingPosition = Math.floor(Math.random() * mockDraftSettings.getTeamCount()) + 1;
        await this.draftUsersRepository.insertDraftUser(draftId, createMockDraftRequest.scheduledByUserId, startingPosition);
        return draftId;
    }
}
exports.CreateMockDraftsUseCase = CreateMockDraftsUseCase;
