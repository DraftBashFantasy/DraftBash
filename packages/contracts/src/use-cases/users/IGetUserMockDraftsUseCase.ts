import { MockDraftResponse } from '../../rest-api/responses';

export interface IGetUserMockDraftsUseCase {
    getUserMockDrafts(userId: number): Promise<MockDraftResponse[]>;
}
