import { CreateTodoRequest } from "../../../contracts/src/rest-api/requests";
import { BadRequestError } from "../exceptions";

export class TodoEntity {
    private readonly description: string;

    private readonly userId: number;

    constructor(todo: CreateTodoRequest) {
        if (todo.description === undefined) {
            throw new BadRequestError('todo is undefined');
        }

        if (todo.userId === undefined) {
            throw new BadRequestError('password is undefined.');
        }

        this.description = todo.description;
        this.userId = todo.userId;
    }

    getDescription(): string {
        return this.description;
    }

    getUserId(): number {
        return this.userId;
    }
}
