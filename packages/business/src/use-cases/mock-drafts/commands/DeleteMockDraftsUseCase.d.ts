import { IMockDraftsRepository } from '../../../persistence';
export declare class DeleteMockDraftsUseCase {
    private readonly mockDraftsRepository;
    constructor(mockDraftsRepository: IMockDraftsRepository);
    deleteMockDraft(draftId: number): Promise<void>;
}
