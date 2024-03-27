"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const business_1 = require("../../../../business");
const DatabaseConnection_1 = require("../DatabaseConnection");
class UsersRepository {
    db;
    constructor() {
        this.db = new DatabaseConnection_1.DatabaseConnection();
    }
    async getUser(userId) {
        const user = await this.db.query('SELECT user_id, username, email, password FROM users WHERE user_id = $1 LIMIT 1', [userId]);
        if (user.length === 0) {
            return null;
        }
        return new business_1.UserEntity(user[0].user_id, new business_1.UserCredentials({
            username: user[0].username,
            email: user[0].email,
            password: user[0].password,
        }));
    }
    async getUsernamesLikeUsername(username) {
        const users = await this.db.query('SELECT username FROM users WHERE username ILIKE $1 LIMIT 10', [`${username}%`]);
        const userEntities = users.map((user) => user.username);
        return userEntities;
    }
    async updateUserPassword(userId, password) {
        await this.db.query('UPDATE users SET password = $1 WHERE user_id = $2;', [
            password,
            userId,
        ]);
    }
    async getUserByUsernameOrEmail(usernameOrEmail) {
        const user = await this.db.query(`SELECT user_id, username, email, password
            FROM users 
            WHERE username = $1 OR email = $1 LIMIT 1`, [usernameOrEmail]);
        if (user.length === 0) {
            return null;
        }
        return new business_1.UserEntity(user[0].user_id, new business_1.UserCredentials({
            username: user[0].username,
            email: user[0].email,
            password: user[0].password,
        }));
    }
    async getUserByEmail(email) {
        const user = await this.db.query('SELECT user_id, username, email, password FROM users WHERE email = $1 LIMIT 1', [email]);
        if (user.length === 0) {
            return null;
        }
        return new business_1.UserEntity(user[0].user_id, new business_1.UserCredentials({
            username: user[0].username,
            email: user[0].email,
            password: user[0].password,
        }));
    }
    async getUserByUsername(username) {
        const user = await this.db.query(`
            SELECT user_id, username, email, password FROM users WHERE username = $1 LIMIT 1`, [username]);
        if (user.length === 0) {
            return null;
        }
        return new business_1.UserEntity(user[0].user_id, new business_1.UserCredentials({
            username: user[0].username,
            email: user[0].email,
            password: user[0].password,
        }));
    }
    async insertUser(userCredentials) {
        const user = await this.db.query(`INSERT INTO users (username, email, password) 
                VALUES ($1, $2, $3)
                RETURNING *`, [
            userCredentials.getUsername(),
            userCredentials.getEmail(),
            userCredentials.getPassword(),
        ]);
        return new business_1.UserEntity(user[0].user_id, new business_1.UserCredentials({
            username: user[0].username,
            email: user[0].email,
            password: user[0].password,
        }));
    }
}
exports.UsersRepository = UsersRepository;
