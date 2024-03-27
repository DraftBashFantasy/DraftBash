"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDraftsController = void 0;
const business_1 = require("@draftbash/business");
class MockDraftsController {
    createMockDraftsUseCase;
    updateMockDraftsUseCase;
    deleteMockDraftsUseCase;
    getMockDraftsUseCase;
    constructor(createMockDraftsUsecase, updateMockDraftsUsecase, deleteMockDraftsUseCase, getMockDraftsUseCase) {
        this.createMockDraftsUseCase = createMockDraftsUsecase;
        this.updateMockDraftsUseCase = updateMockDraftsUsecase;
        this.deleteMockDraftsUseCase = deleteMockDraftsUseCase;
        this.getMockDraftsUseCase = getMockDraftsUseCase;
    }
    async createMockDraft(req, res) {
        try {
            const createMockDraftRequest = req.body;
            const createdDraftId = await this.createMockDraftsUseCase.createMockDraft(createMockDraftRequest);
            res.status(201).send({ draftId: createdDraftId });
        }
        catch (error) {
            if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async getMockDraft(req, res) {
        try {
            const draftId = Number(req.params.draftId);
            const mockDraftResponse = await this.getMockDraftsUseCase.getMockDraft(draftId);
            res.status(200).send(mockDraftResponse);
        }
        catch (error) {
            if (error instanceof business_1.DraftNotFoundError) {
                res.status(404).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async updateMockDraft(req, res) {
        try {
            const updateMockDraftRequest = req.body;
            const draftId = Number(req.params.draftId);
            await this.updateMockDraftsUseCase.updateMockDraft(draftId, updateMockDraftRequest);
            res.sendStatus(200);
        }
        catch (error) {
            if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
    async deleteMockDraft(req, res) {
        try {
            const draftId = Number(req.params.draftId);
            await this.deleteMockDraftsUseCase.deleteMockDraft(draftId);
            res.sendStatus(204);
        }
        catch (error) {
            if (error instanceof business_1.BadRequestError) {
                res.status(400).send({ errorName: error.name, error: error.message });
            }
            else if (error instanceof Error) {
                res.status(500).send({ errorName: error.name, error: error.message });
            }
            else {
                res.status(500).send({ error: 'An unknown error occurred.' });
            }
        }
    }
}
exports.MockDraftsController = MockDraftsController;
