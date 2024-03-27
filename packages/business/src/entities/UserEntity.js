"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const exceptions_1 = require("../exceptions");
class UserEntity {
    userId;
    credentials;
    constructor(userId, credentials) {
        if (!Number.isInteger(userId) || userId <= 0) {
            throw new exceptions_1.BadRequestError('userId is must be a positive integer.');
        }
        this.userId = userId;
        this.credentials = credentials;
    }
    getUserId() {
        return this.userId;
    }
    getUsername() {
        return this.credentials.getUsername();
    }
    getEmail() {
        return this.credentials.getEmail();
    }
    getPassword() {
        return this.credentials.getPassword();
    }
}
exports.UserEntity = UserEntity;
