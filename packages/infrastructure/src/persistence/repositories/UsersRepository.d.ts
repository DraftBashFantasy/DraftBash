import { IUsersRepository, UserEntity, UserCredentials } from '../../../../business';
export declare class UsersRepository implements IUsersRepository {
    private db;
    constructor();
    getUser(userId: number): Promise<UserEntity | null>;
    getUsernamesLikeUsername(username: string): Promise<string[]>;
    updateUserPassword(userId: number, password: string): Promise<void>;
    getUserByUsernameOrEmail(usernameOrEmail: string): Promise<UserEntity | null>;
    getUserByEmail(email: string): Promise<UserEntity | null>;
    getUserByUsername(username: string): Promise<UserEntity | null>;
    insertUser(userCredentials: UserCredentials): Promise<UserEntity>;
}
