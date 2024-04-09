import { CreateTodoRequest } from "../../rest-api/requests";

export interface ICreateTodoUseCase {
    createTodo(createTodosRequest: CreateTodoRequest): void;
}