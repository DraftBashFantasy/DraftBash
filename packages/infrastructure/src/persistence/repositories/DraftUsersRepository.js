"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftUsersRepository = void 0;
const DatabaseConnection_1 = require("../DatabaseConnection");
class DraftUsersRepository {
    db;
    constructor() {
        this.db = new DatabaseConnection_1.DatabaseConnection();
    }
    async insertDraftUser(draftId, userId, teamNumber) {
        try {
            await this.db.query('BEGIN');
            await this.db.query(`INSERT INTO draft_users (draft_id, user_id)
                VALUES ($1, $2)`, [draftId, userId]);
            await this.db.query(`UPDATE draft_orders
                SET user_id = $1
                WHERE draft_id = $2 AND team_number = $3 AND user_id IS NULL`, [userId, draftId, teamNumber]);
            await this.db.query('COMMIT');
        }
        catch (error) {
            await this.db.query('ROLLBACK');
            throw error;
        }
    }
}
exports.DraftUsersRepository = DraftUsersRepository;
