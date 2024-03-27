import { MockDraftResponse, IGetUserMockDraftsUseCase } from '../../../../../contracts';
import { IMockDraftsRepository, IUsersRepository } from '../../../persistence';
export declare class GetUserMockDraftsUseCase implements IGetUserMockDraftsUseCase {
    private readonly mockDraftsRepository;
    private readonly usersRepository;
    constructor(mockDraftsRepository: IMockDraftsRepository, usersRepository: IUsersRepository);
    getUserMockDrafts(draftId: number): Promise<MockDraftResponse[]>;
}
