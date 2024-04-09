import { TodoEntity } from "../../../business/src/entities";

export interface ITodosRepository {
    insertTodo(todo: TodoEntity): Promise<void>;
}
