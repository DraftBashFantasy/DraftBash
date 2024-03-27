"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMockDraftsUseCase = void 0;
class DeleteMockDraftsUseCase {
    mockDraftsRepository;
    constructor(mockDraftsRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
    }
    async deleteMockDraft(draftId) {
        await this.mockDraftsRepository.deleteMockDraft(draftId);
    }
}
exports.DeleteMockDraftsUseCase = DeleteMockDraftsUseCase;
