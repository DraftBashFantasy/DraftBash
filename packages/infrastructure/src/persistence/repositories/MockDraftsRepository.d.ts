import { MockDraftEntity, IMockDraftsRepository, DraftSettings, MockDraft } from '../../../../business';
export declare class MockDraftsRepository implements IMockDraftsRepository {
    private db;
    constructor();
    getUserMockDrafts(userId: number): Promise<MockDraftEntity[]>;
    getMockDraft(draftId: number): Promise<MockDraftEntity | null>;
    deleteMockDraft(draftId: number): Promise<void>;
    updateMockDraft(draftId: number, draftSettings: DraftSettings, draftOrder: number[]): Promise<void>;
    insertMockDraft(mockDraft: MockDraft, draftOrder: number[]): Promise<number>;
}
