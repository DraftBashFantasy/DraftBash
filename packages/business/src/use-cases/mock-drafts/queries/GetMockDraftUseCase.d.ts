import { IGetMockDraftUseCase, MockDraftResponse } from '../../../../../contracts';
import { IUsersRepository, IMockDraftsRepository } from '../../../persistence';
export declare class GetMockDraftsUseCase implements IGetMockDraftUseCase {
    private readonly mockDraftsRepository;
    private readonly usersRepository;
    constructor(mockDraftsRepository: IMockDraftsRepository, usersRepository: IUsersRepository);
    getMockDraft(draftId: number): Promise<MockDraftResponse>;
}
