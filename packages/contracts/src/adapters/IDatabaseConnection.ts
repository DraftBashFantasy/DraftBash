/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDatabaseConnection {
    query(sql: string, params?: unknown[]): Promise<any>;
}
