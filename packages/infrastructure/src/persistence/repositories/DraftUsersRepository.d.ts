import { IDraftUsersRepository } from '../../../../business';
export declare class DraftUsersRepository implements IDraftUsersRepository {
    private db;
    constructor();
    insertDraftUser(draftId: number, userId: number, teamNumber: number): Promise<void>;
}
