import { UserCredentials } from '../value-objects';
export declare class UserEntity {
    private userId;
    private credentials;
    constructor(userId: number, credentials: UserCredentials);
    getUserId(): number;
    getUsername(): string;
    getEmail(): string;
    getPassword(): string;
}
