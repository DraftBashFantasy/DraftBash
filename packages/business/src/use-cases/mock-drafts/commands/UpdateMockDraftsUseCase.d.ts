import { UpdateMockDraftRequest, IUpdateMockDraftsUseCase } from '../../../../../contracts';
import { IMockDraftsRepository } from '../../../persistence';
export declare class UpdateMockDraftsUseCase implements IUpdateMockDraftsUseCase {
    private readonly draftsRepository;
    private readonly draftOrderGeneratorFactory;
    constructor(draftsRepository: IMockDraftsRepository);
    updateMockDraft(draftId: number, updateMockDraftRequest: UpdateMockDraftRequest): Promise<void>;
}
