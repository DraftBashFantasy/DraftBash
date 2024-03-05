import { Request, Response } from 'express';
import {
    ICreateMockDraftsUseCase,
    IUpdateMockDraftsUseCase,
    IDeleteMockDraftsUseCase,
    IGetMockDraftUseCase,
    MockDraftResponse,
    UpdateMockDraftRequest,
    CreateMockDraftRequest,
} from '../../../../contracts';
import { BadRequestError, DraftNotFoundError } from '../../../../business';

export class MockDraftsController {
    private readonly createMockDraftsUseCase: ICreateMockDraftsUseCase;

    private readonly updateMockDraftsUseCase: IUpdateMockDraftsUseCase;

    private readonly deleteMockDraftsUseCase: IDeleteMockDraftsUseCase;

    private readonly getMockDraftsUseCase: IGetMockDraftUseCase;

    constructor(
        createMockDraftsUsecase: ICreateMockDraftsUseCase,
        updateMockDraftsUsecase: IUpdateMockDraftsUseCase,
        deleteMockDraftsUseCase: IDeleteMockDraftsUseCase,
        getMockDraftsUseCase: IGetMockDraftUseCase
    ) {
        this.createMockDraftsUseCase = createMockDraftsUsecase;
        this.updateMockDraftsUseCase = updateMockDraftsUsecase;
        this.deleteMockDraftsUseCase = deleteMockDraftsUseCase;
        this.getMockDraftsUseCase = getMockDraftsUseCase;
    }

    public async createMockDraft(req: Request, res: Response) {
        try {
            const createMockDraftRequest: CreateMockDraftRequest = req.body;
            const createdDraftId: number =
                await this.createMockDraftsUseCase.createMockDraft(createMockDraftRequest);
            res.status(201).send({ draftId: createdDraftId });
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

    public async getMockDraft(req: Request, res: Response) {
        try {
            const draftId: number = Number(req.params.draftId);
            const mockDraftResponse: MockDraftResponse = await this.getMockDraftsUseCase.getMockDraft(draftId);
            res.status(200).send(mockDraftResponse);
        } catch (error: unknown) {
            if (error instanceof DraftNotFoundError) {
                res.status(404).send({ errorName: error.name, error: error.message });
            } else if (error instanceof BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            } else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            } else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }

    async updateMockDraft(req: Request, res: Response) {
        try {
            const updateMockDraftRequest: UpdateMockDraftRequest = req.body;
            const draftId: number = Number(req.params.draftId);
            await this.updateMockDraftsUseCase.updateMockDraft(draftId, updateMockDraftRequest);
            res.sendStatus(200);
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

    async deleteMockDraft(req: Request, res: Response) {
        try {
            const draftId: number = Number(req.params.draftId);
            await this.deleteMockDraftsUseCase.deleteMockDraft(draftId);
            res.sendStatus(204);
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
