import { MockDraftEntity } from '../../../business/src/entities/MockDraftEntity';
import { DraftSettings, MockDraft } from '../../../business/src/value-objects';

export interface IMockDraftsRepository {
    insertMockDraft(mockDraft: MockDraft, draftOrder: number[]): Promise<number>;
    updateMockDraft(draftId: number, draftSettings: DraftSettings, draftOrder: number[]): void;
    deleteMockDraft(draftId: number): Promise<void>;
    getMockDraft(draftId: number): Promise<MockDraftEntity | null>;
    getUserMockDrafts(userId: number): Promise<MockDraftEntity[]>;
}
