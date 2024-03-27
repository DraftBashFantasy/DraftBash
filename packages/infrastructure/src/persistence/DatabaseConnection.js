"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const dotenv_1 = require("dotenv");
const pg_1 = require("pg");
(0, dotenv_1.configDotenv)();
class DatabaseConnection {
    pool;
    constructor() {
        const connectionString = String(process.env.DATABASE_URL);
        this.pool = new pg_1.Pool({ connectionString });
    }
    async query(sql, params) {
        const result = await this.pool.query(sql, params);
        return result.rows;
    }
}
exports.DatabaseConnection = DatabaseConnection;
