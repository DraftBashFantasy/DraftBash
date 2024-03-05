export interface IDraftOrderObserver {
    update(currentDraftOrderTurn: unknown): void;
    setDraft(draft: unknown): void;
}
