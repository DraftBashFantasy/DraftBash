export interface IDatabaseConnection {
    query(sql: string, params?: unknown[]): Promise<any>;
}
