"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundByUsernameError = void 0;
class UserNotFoundByUsernameError extends Error {
    similarUsernames;
    constructor(similarUsernames, message) {
        super(message);
        this.name = 'UserNotFoundByUsernameError';
        this.similarUsernames = similarUsernames;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    getSimilarUsernameUsers() {
        return this.similarUsernames;
    }
}
exports.UserNotFoundByUsernameError = UserNotFoundByUsernameError;
