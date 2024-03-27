export interface IDeleteMockDraftsUseCase {
    deleteMockDraft(draftId: number): Promise<void>;
}
