import express, { Request, Response } from 'express';
import {
    GetMockDraftsUseCase,
    DeleteMockDraftsUseCase,
    CreateMockDraftsUseCase,
    UpdateMockDraftsUseCase,
} from '@draftbash/business';
import { UsersRepository, DraftUsersRepository, MockDraftsRepository } from '@draftbash/infrastructure';
import { MockDraftsController } from '../controllers';

export const mockDraftsRouter = express.Router();

const draftsRepository = new MockDraftsRepository();
const draftUsersRepository = new DraftUsersRepository();
const usersRepository = new UsersRepository();

const createMockDraftsUseCase = new CreateMockDraftsUseCase(draftsRepository, draftUsersRepository);
const updateMockDraftsUseCase = new UpdateMockDraftsUseCase(draftsRepository);
const deleteMockDraftsUseCase = new DeleteMockDraftsUseCase(draftsRepository);
const getMockDraftsUseCase = new GetMockDraftsUseCase(draftsRepository, usersRepository);

const mockDraftsController = new MockDraftsController(
    createMockDraftsUseCase,
    updateMockDraftsUseCase,
    deleteMockDraftsUseCase,
    getMockDraftsUseCase,
);

mockDraftsRouter
    .route('/')
    .post((request: Request, response: Response) => mockDraftsController.createMockDraft(request, response));

mockDraftsRouter
    .route('/:draftId')
    .get((request: Request, response: Response) => mockDraftsController.getMockDraft(request, response))
    .put((request: Request, response: Response) => mockDraftsController.updateMockDraft(request, response))
    .delete((request: Request, response: Response) => mockDraftsController.deleteMockDraft(request, response));
