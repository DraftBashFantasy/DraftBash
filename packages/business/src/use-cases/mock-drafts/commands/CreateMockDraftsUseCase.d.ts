import { CreateMockDraftRequest, ICreateMockDraftsUseCase } from '../../../../../contracts';
import { IDraftUsersRepository, IMockDraftsRepository } from '../../../persistence';
export declare class CreateMockDraftsUseCase implements ICreateMockDraftsUseCase {
    private readonly mockDraftsRepository;
    private readonly draftUsersRepository;
    private readonly draftOrderGeneratorFactory;
    constructor(mockDraftsRepository: IMockDraftsRepository, draftUsersRepository: IDraftUsersRepository);
    createMockDraft(createMockDraftRequest: CreateMockDraftRequest): Promise<number>;
}
