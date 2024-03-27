import { UserEntity } from '../entities';
import { UserCredentials } from '../value-objects';
export interface IUsersRepository {
    getUsernamesLikeUsername(username: string): Promise<string[]>;
    insertUser(userCredentials: UserCredentials): Promise<UserEntity>;
    getUserByUsername(username: string): Promise<UserEntity | null>;
    getUserByEmail(username: string): Promise<UserEntity | null>;
    getUserByUsernameOrEmail(usernameOrEmail: string): Promise<UserEntity | null>;
    getUser(userId: number): Promise<UserEntity | null>;
}
