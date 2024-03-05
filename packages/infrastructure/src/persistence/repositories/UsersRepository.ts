/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUsersRepository, UserEntity, UserCredentials } from '../../../../business';
import { DatabaseConnection } from '../DatabaseConnection';

export class UsersRepository implements IUsersRepository {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection();
    }

    async getUser(userId: number): Promise<UserEntity | null> {
        const user = await this.db.query(
            'SELECT user_id, username, email, password FROM users WHERE user_id = $1 LIMIT 1',
            [userId],
        );
        if (user.length === 0) {
            return null;
        }
        return new UserEntity(
            user[0].user_id,
            new UserCredentials({
                username: user[0].username,
                email: user[0].email,
                password: user[0].password,
            }),
        );
    }

    async getUsernamesLikeUsername(username: string): Promise<string[]> {
        const users = await this.db.query(
            'SELECT username FROM users WHERE username ILIKE $1 LIMIT 10',
            [`${username}%`],
        );
        const userEntities: string[] = users.map((user: any) => user.username);
        return userEntities;
    }

    async updateUserPassword(userId: number, password: string): Promise<void> {
        await this.db.query('UPDATE users SET password = $1 WHERE user_id = $2;', [
            password,
            userId,
        ]);
    }

    async getUserByUsernameOrEmail(usernameOrEmail: string): Promise<UserEntity | null> {
        const user = await this.db.query(
            `SELECT user_id, username, email, password
            FROM users 
            WHERE username = $1 OR email = $1 LIMIT 1`,
            [usernameOrEmail],
        );
        if (user.length === 0) {
            return null;
        }
        return new UserEntity(
            user[0].user_id,
            new UserCredentials({
                username: user[0].username,
                email: user[0].email,
                password: user[0].password,
            }),
        );
    }

    async getUserByEmail(email: string): Promise<UserEntity | null> {
        const user = await this.db.query(
            'SELECT user_id, username, email, password FROM users WHERE email = $1 LIMIT 1',
            [email],
        );
        if (user.length === 0) {
            return null;
        }
        return new UserEntity(
            user[0].user_id,
            new UserCredentials({
                username: user[0].username,
                email: user[0].email,
                password: user[0].password,
            }),
        );
    }

    async getUserByUsername(username: string): Promise<UserEntity | null> {
        const user = await this.db.query(
            `
            SELECT user_id, username, email, password FROM users WHERE username = $1 LIMIT 1`,
            [username],
        );
        if (user.length === 0) {
            return null;
        }

        return new UserEntity(
            user[0].user_id,
            new UserCredentials({
                username: user[0].username,
                email: user[0].email,
                password: user[0].password,
            }),
        );
    }

    async insertUser(userCredentials: UserCredentials): Promise<UserEntity> {
        const user = await this.db.query(
            `INSERT INTO users (username, email, password) 
                VALUES ($1, $2, $3)
                RETURNING *`,
            [
                userCredentials.getUsername(),
                userCredentials.getEmail(),
                userCredentials.getPassword(),
            ],
        );
        return new UserEntity(
            user[0].user_id,
            new UserCredentials({
                username: user[0].username,
                email: user[0].email,
                password: user[0].password,
            }),
        );
    }
}
