/* eslint-disable @typescript-eslint/no-explicit-any */
import { configDotenv } from 'dotenv';
import { Pool } from 'pg';
import { IDatabaseConnection } from '../../../contracts';

configDotenv(); // Load environment variables from .env file

export class DatabaseConnection implements IDatabaseConnection {
    private pool: Pool;

    constructor() {
        const connectionString: string = String(process.env.DATABASE_URL);
        this.pool = new Pool({ connectionString });
    }

    async query(sql: string, params?: unknown[]): Promise<any> {
        const result = await this.pool.query(sql, params);
        return result.rows;
    }
}
