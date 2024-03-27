"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUserCredentialsError = void 0;
const BadRequestError_1 = require("./BadRequestError");
class InvalidUserCredentialsError extends BadRequestError_1.BadRequestError {
    constructor(message) {
        super(message);
        this.name = 'InvalidUserCredentialsError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.InvalidUserCredentialsError = InvalidUserCredentialsError;
