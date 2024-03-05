/* eslint-disable no-unused-vars */
import { UpdateMockDraftRequest } from '../../rest-api/requests';

export interface IUpdateMockDraftsUseCase {
    updateMockDraft(draftId: number, updateMockDraftRequest: UpdateMockDraftRequest): Promise<void>;
}
