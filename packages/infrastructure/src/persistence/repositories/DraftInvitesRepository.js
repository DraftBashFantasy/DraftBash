"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftInvitesRepository = void 0;
const DatabaseConnection_1 = require("../DatabaseConnection");
class DraftInvitesRepository {
    db;
    constructor() {
        this.db = new DatabaseConnection_1.DatabaseConnection();
    }
    async insertDraftInvite(draftInvite) {
        await this.db.query(`INSERT INTO draft_invites (draft_id, user_id)
            VALUES ($1, $2)`, [draftInvite.getDraftId(), draftInvite.getUserId()]);
    }
}
exports.DraftInvitesRepository = DraftInvitesRepository;
