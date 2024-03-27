import { CreateMockDraftRequest } from '../../rest-api/requests';
export interface ICreateMockDraftsUseCase {
    createMockDraft(createMockDraftRequest: CreateMockDraftRequest): Promise<number>;
}
