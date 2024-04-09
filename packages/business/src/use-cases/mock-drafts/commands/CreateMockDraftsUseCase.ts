import { CreateMockDraftRequest, ICreateMockDraftsUseCase } from '../../../../../contracts'
import { IDraftUsersRepository, IMockDraftsRepository } from '../../../../../contracts/src/persistence';
import { DraftOrderGeneratorFactory } from '../../../services';
import { DraftSettings, MockDraft } from '../../../value-objects';

export class CreateMockDraftsUseCase implements ICreateMockDraftsUseCase {
    private readonly mockDraftsRepository: IMockDraftsRepository;

    private readonly draftUsersRepository: IDraftUsersRepository;

    private readonly draftOrderGeneratorFactory: DraftOrderGeneratorFactory;

    constructor(mockDraftsRepository: IMockDraftsRepository, draftUsersRepository: IDraftUsersRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
        this.draftUsersRepository = draftUsersRepository;
        this.draftOrderGeneratorFactory = new DraftOrderGeneratorFactory();
    }

    public async createMockDraft(createMockDraftRequest: CreateMockDraftRequest): Promise<number> {
        const mockDraftSettings = new DraftSettings(createMockDraftRequest.draftSettings);

        const mockDraft = new MockDraft(createMockDraftRequest.scheduledByUserId, mockDraftSettings);

        const draftOrderGenerator = this.draftOrderGeneratorFactory.getDraftOrderGenerator(
            mockDraftSettings.getOrderType(),
        );

        const draftOrder: number[] = draftOrderGenerator.generate(
            mockDraftSettings.getTeamCount(),
            mockDraftSettings.getTeamSize(),
        );

        const draftId: number = await this.mockDraftsRepository.insertMockDraft(mockDraft, draftOrder);

        const startingPosition: number = Math.floor(Math.random() * mockDraftSettings.getTeamCount()) + 1;

        await this.draftUsersRepository.insertDraftUser(
            draftId,
            createMockDraftRequest.scheduledByUserId,
            startingPosition,
        );

        return draftId;
    }
}
