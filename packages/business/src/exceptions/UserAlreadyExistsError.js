"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = void 0;
class UserAlreadyExistsError extends Error {
    isUsernameUnique;
    isEmailUnique;
    constructor(isUsernameUnique, isEmailUnique, message) {
        super(message);
        this.name = 'UserAlreadyExistsError';
        this.isUsernameUnique = isUsernameUnique;
        this.isEmailUnique = isEmailUnique;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    getIsUsernameUnique() {
        return this.isUsernameUnique;
    }
    getIsEmailUnique() {
        return this.isEmailUnique;
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
