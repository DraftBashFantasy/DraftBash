"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentials = void 0;
const exceptions_1 = require("../exceptions");
const Email_1 = require("./Email");
class UserCredentials {
    username;
    email;
    password;
    constructor(credentials) {
        if (credentials.username === undefined) {
            throw new exceptions_1.BadRequestError('username is undefined.');
        }
        if (credentials.password === undefined) {
            throw new exceptions_1.BadRequestError('password is undefined.');
        }
        if (credentials.username.length < 3 || credentials.username.length > 15) {
            throw new exceptions_1.BadRequestError('Username must be between 3 and 15 characters long.');
        }
        if (credentials.password.length < 8) {
            throw new exceptions_1.BadRequestError('Password must be at least 8 characters long.');
        }
        if (!/[A-Z]/.test(credentials.password)) {
            throw new exceptions_1.BadRequestError('Password must contain at least one capital letter.');
        }
        if (!/[0-9]/.test(credentials.password)) {
            throw new exceptions_1.BadRequestError('Password must contain at least one number.');
        }
        this.username = credentials.username;
        this.email = new Email_1.Email(credentials.email);
        this.password = credentials.password;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email.getValue();
    }
    getPassword() {
        return this.password;
    }
}
exports.UserCredentials = UserCredentials;
