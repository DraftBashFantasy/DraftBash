import { DraftInvite } from '../../../../business';
import { DatabaseConnection } from '../DatabaseConnection';

export class DraftInvitesRepository {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection();
    }

    public async insertDraftInvite(draftInvite: DraftInvite): Promise<void> {
        await this.db.query(
            `INSERT INTO draft_invites (draft_id, user_id)
            VALUES ($1, $2)`,
            [draftInvite.getDraftId(), draftInvite.getUserId()],
        );
    }
}
