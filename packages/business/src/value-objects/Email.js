"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const exceptions_1 = require("../exceptions");
class Email {
    email;
    constructor(email) {
        if (email === undefined) {
            throw new exceptions_1.BadRequestError('email is undefined.');
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new exceptions_1.BadRequestError('Invalid email.');
        }
        this.email = email;
    }
    getValue() {
        return this.email;
    }
}
exports.Email = Email;
