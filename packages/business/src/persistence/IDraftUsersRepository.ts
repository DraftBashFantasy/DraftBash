export interface IDraftUsersRepository {
    insertDraftUser(draftId: number, userId: number, teamNumber: number): Promise<void>;
}
