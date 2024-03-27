"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidJwtTokenError = void 0;
class InvalidJwtTokenError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidUserCredentialsError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.InvalidJwtTokenError = InvalidJwtTokenError;
