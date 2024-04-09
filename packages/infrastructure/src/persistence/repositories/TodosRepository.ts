import { ITodosRepository } from '../../../../contracts/src/persistence';
import { TodoEntity } from '../../../../business/src/entities';
import { DatabaseConnection } from '../DatabaseConnection';

export class TodosRepository implements ITodosRepository {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection();
    }

    public async insertTodo(todo: TodoEntity): Promise<void> {
        await this.db.query(
            `INSERT INTO todos (user_id, description)
            VALUES ($1, $2)`,
            [todo.getUserId(), todo.getDescription()]
        );
    }
}
