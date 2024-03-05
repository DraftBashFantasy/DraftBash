import { MockDraftResponse } from '../../rest-api/responses';

export interface IGetMockDraftUseCase {
    getMockDraft(draftId: number): Promise<MockDraftResponse>;
}
