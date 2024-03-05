import { CreateUserRequest } from '../../../contracts/src/rest-api/requests/CreateUserRequest';
import { BadRequestError } from '../exceptions';
import { Email } from './Email';

export class UserCredentials {
    private readonly username: string;

    private readonly email: Email;

    private readonly password: string;

    constructor(credentials: CreateUserRequest) {
        if (credentials.username === undefined) {
            throw new BadRequestError('username is undefined.');
        }

        if (credentials.password === undefined) {
            throw new BadRequestError('password is undefined.');
        }

        if (credentials.username.length < 3 || credentials.username.length > 15) {
            throw new BadRequestError('Username must be between 3 and 15 characters long.');
        }

        if (credentials.password.length < 8) {
            throw new BadRequestError('Password must be at least 8 characters long.');
        }

        if (!/[A-Z]/.test(credentials.password)) {
            throw new BadRequestError('Password must contain at least one capital letter.');
        }

        if (!/[0-9]/.test(credentials.password)) {
            throw new BadRequestError('Password must contain at least one number.');
        }

        this.username = credentials.username;
        this.email = new Email(credentials.email);
        this.password = credentials.password;
    }

    getUsername(): string {
        return this.username;
    }

    getEmail(): string {
        return this.email.getValue();
    }

    getPassword(): string {
        return this.password;
    }
}
