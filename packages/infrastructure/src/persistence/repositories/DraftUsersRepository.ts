/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDraftUsersRepository } from '../../../../business';
import { DatabaseConnection } from '../DatabaseConnection';

export class DraftUsersRepository implements IDraftUsersRepository {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection();
    }

    public async insertDraftUser(draftId: number, userId: number, teamNumber: number): Promise<void> {
        try {
            await this.db.query('BEGIN');

            await this.db.query(
                `INSERT INTO draft_users (draft_id, user_id)
                VALUES ($1, $2)`,
                [draftId, userId],
            );

            await this.db.query(
                `UPDATE draft_orders
                SET user_id = $1
                WHERE draft_id = $2 AND team_number = $3 AND user_id IS NULL`,
                [userId, draftId, teamNumber],
            );

            await this.db.query('COMMIT');
        } catch (error) {
            await this.db.query('ROLLBACK');
            throw error;
        }
    }
}
