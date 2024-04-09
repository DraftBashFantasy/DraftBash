import { UpdateMockDraftRequest, IUpdateMockDraftsUseCase } from '../../../../../contracts';
import { DraftSettings } from '../../../value-objects';
import { IMockDraftsRepository } from '../../../../../contracts/src/persistence';
import { DraftOrderGeneratorFactory, IDraftOrderGenerator } from '../../../services';

export class UpdateMockDraftsUseCase implements IUpdateMockDraftsUseCase {
    private readonly draftsRepository: IMockDraftsRepository;

    private readonly draftOrderGeneratorFactory: DraftOrderGeneratorFactory;

    constructor(draftsRepository: IMockDraftsRepository) {
        this.draftsRepository = draftsRepository;
        this.draftOrderGeneratorFactory = new DraftOrderGeneratorFactory();
    }

    public async updateMockDraft(draftId: number, updateMockDraftRequest: UpdateMockDraftRequest): Promise<void> {
        const mockDraftSettings = new DraftSettings(updateMockDraftRequest.draftSettings);

        const draftOrderGenerator: IDraftOrderGenerator = this.draftOrderGeneratorFactory.getDraftOrderGenerator(
            mockDraftSettings.getOrderType()
        );

        const draftOrder: number[] = draftOrderGenerator.generate(
            mockDraftSettings.getTeamCount(),
            mockDraftSettings.getTeamSize()
        );

        await this.draftsRepository.updateMockDraft(draftId, mockDraftSettings, draftOrder);
    }
}
