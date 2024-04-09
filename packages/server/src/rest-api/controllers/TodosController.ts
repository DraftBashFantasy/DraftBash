import { Request, Response } from 'express';
import { ICreateTodoUseCase } from '../../../../contracts/src/use-cases';
import { CreateTodoRequest } from '../../../../contracts/src/rest-api/requests';
import { BadRequestError } from '../../../../business';

export class TodosController {
    private readonly createTodoUseCase: ICreateTodoUseCase

    constructor(createTodoUseCase: ICreateTodoUseCase) {
        this.createTodoUseCase = createTodoUseCase;
    }

    async createTodo(req: Request, res: Response) {
        try {
            const createTodoRequest: CreateTodoRequest = req.body;
            await this.createTodoUseCase.createTodo(createTodoRequest);
            res.status(201).send("Success!");
        } catch (error: unknown) {
            if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
}
