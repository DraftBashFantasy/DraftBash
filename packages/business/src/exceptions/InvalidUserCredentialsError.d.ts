import { BadRequestError } from './BadRequestError';
export declare class InvalidUserCredentialsError extends BadRequestError {
    constructor(message: string);
}
