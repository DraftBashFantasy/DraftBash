import { BadRequestError } from '../exceptions';

export class DraftInvite {
    private readonly userId: number;

    private readonly draftId: number;

    constructor(userId: number, draftId: number) {
        if (!Number.isInteger(userId) || userId <= 0) {
            throw new BadRequestError('userId must be an integer greater than 0.');
        }
        if (!Number.isInteger(draftId) || draftId <= 0) {
            throw new BadRequestError('draftId must be an integer greater than 0.');
        }

        this.userId = userId;
        this.draftId = draftId;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getDraftId(): number {
        return this.draftId;
    }
}
