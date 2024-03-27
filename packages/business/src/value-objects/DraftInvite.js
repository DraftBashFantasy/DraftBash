"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftInvite = void 0;
const exceptions_1 = require("../exceptions");
class DraftInvite {
    userId;
    draftId;
    constructor(userId, draftId) {
        if (!Number.isInteger(userId) || userId <= 0) {
            throw new exceptions_1.BadRequestError('userId must be an integer greater than 0.');
        }
        if (!Number.isInteger(draftId) || draftId <= 0) {
            throw new exceptions_1.BadRequestError('draftId must be an integer greater than 0.');
        }
        this.userId = userId;
        this.draftId = draftId;
    }
    getUserId() {
        return this.userId;
    }
    getDraftId() {
        return this.draftId;
    }
}
exports.DraftInvite = DraftInvite;
