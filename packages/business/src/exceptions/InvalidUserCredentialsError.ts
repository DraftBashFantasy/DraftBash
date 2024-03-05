import { BadRequestError } from './BadRequestError';

export class InvalidUserCredentialsError extends BadRequestError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidUserCredentialsError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
