"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftNotFoundError = void 0;
class DraftNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DraftNotFoundError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.DraftNotFoundError = DraftNotFoundError;
