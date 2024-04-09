import express, { Request, Response } from 'express';
import { TodosRepository } from '../../../../infrastructure/src/persistence/repositories/TodosRepository';
import { CreateTodoUseCase } from '../../../../business/src/use-cases/todos';
import { TodosController } from '../controllers';

export const todosRouter = express.Router();

const todosRepository = new TodosRepository();

const createTodosUseCase = new CreateTodoUseCase(todosRepository);

const todosController = new TodosController(createTodosUseCase);

// Full URL will be /api/v1/todos
todosRouter
    .route('/')
    .post((request: Request, response: Response) => todosController.createTodo(request, response));