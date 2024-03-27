import { IDatabaseConnection } from '../../../contracts';
export declare class DatabaseConnection implements IDatabaseConnection {
    private pool;
    constructor();
    query(sql: string, params?: unknown[]): Promise<any>;
}
