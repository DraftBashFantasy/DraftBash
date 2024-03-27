import { Request, Response } from 'express';
import { ICreateMockDraftsUseCase, IUpdateMockDraftsUseCase, IDeleteMockDraftsUseCase, IGetMockDraftUseCase } from '@draftbash/contracts';
export declare class MockDraftsController {
    private readonly createMockDraftsUseCase;
    private readonly updateMockDraftsUseCase;
    private readonly deleteMockDraftsUseCase;
    private readonly getMockDraftsUseCase;
    constructor(createMockDraftsUsecase: ICreateMockDraftsUseCase, updateMockDraftsUsecase: IUpdateMockDraftsUseCase, deleteMockDraftsUseCase: IDeleteMockDraftsUseCase, getMockDraftsUseCase: IGetMockDraftUseCase);
    createMockDraft(req: Request, res: Response): Promise<void>;
    getMockDraft(req: Request, res: Response): Promise<void>;
    updateMockDraft(req: Request, res: Response): Promise<void>;
    deleteMockDraft(req: Request, res: Response): Promise<void>;
}
