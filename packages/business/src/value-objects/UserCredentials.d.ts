import { CreateUserRequest } from '../../../contracts/src/rest-api/requests/CreateUserRequest';
export declare class UserCredentials {
    private readonly username;
    private readonly email;
    private readonly password;
    constructor(credentials: CreateUserRequest);
    getUsername(): string;
    getEmail(): string;
    getPassword(): string;
}
