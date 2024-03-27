"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMockDraftsUseCase = void 0;
const value_objects_1 = require("../../../value-objects");
const services_1 = require("../../../services");
class UpdateMockDraftsUseCase {
    draftsRepository;
    draftOrderGeneratorFactory;
    constructor(draftsRepository) {
        this.draftsRepository = draftsRepository;
        this.draftOrderGeneratorFactory = new services_1.DraftOrderGeneratorFactory();
    }
    async updateMockDraft(draftId, updateMockDraftRequest) {
        const mockDraftSettings = new value_objects_1.DraftSettings(updateMockDraftRequest.draftSettings);
        const draftOrderGenerator = this.draftOrderGeneratorFactory.getDraftOrderGenerator(mockDraftSettings.getOrderType());
        const draftOrder = draftOrderGenerator.generate(mockDraftSettings.getTeamCount(), mockDraftSettings.getTeamSize());
        await this.draftsRepository.updateMockDraft(draftId, mockDraftSettings, draftOrder);
    }
}
exports.UpdateMockDraftsUseCase = UpdateMockDraftsUseCase;
