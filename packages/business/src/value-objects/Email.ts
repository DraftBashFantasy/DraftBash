import { BadRequestError } from '../exceptions';

export class Email {
    private readonly email: string;

    constructor(email: string) {
        if (email === undefined) {
            throw new BadRequestError('email is undefined.');
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new BadRequestError('Invalid email.');
        }
        this.email = email;
    }

    getValue(): string {
        return this.email;
    }
}
