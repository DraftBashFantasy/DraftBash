import { IMockDraftsRepository } from '../../../persistence';

export class DeleteMockDraftsUseCase {
    private readonly mockDraftsRepository: IMockDraftsRepository;

    constructor(mockDraftsRepository: IMockDraftsRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
    }

    public async deleteMockDraft(draftId: number): Promise<void> {
        await this.mockDraftsRepository.deleteMockDraft(draftId);
    }
}
