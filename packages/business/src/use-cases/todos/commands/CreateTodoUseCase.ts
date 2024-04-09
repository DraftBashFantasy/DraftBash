import { CreateTodoRequest } from "../../../../../contracts/src/rest-api/requests";
import { ICreateTodoUseCase } from "../../../../../contracts/src/use-cases";
import { ITodosRepository } from "../../../../../contracts/src/persistence";
import { TodoEntity } from "../../../entities";

export class CreateTodoUseCase implements ICreateTodoUseCase {
    private readonly todoRepository: ITodosRepository;

    constructor(todoRepository: ITodosRepository) {
        this.todoRepository = todoRepository;
    }

    createTodo(createTodosRequest: CreateTodoRequest): void {
        const todo = new TodoEntity(createTodosRequest);
        this.todoRepository.insertTodo(todo);
    }
}