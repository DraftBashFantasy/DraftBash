import { DraftSettingsDTO } from '../shared';

export type CreateMockDraftRequest = {
    scheduledByUserId: number;
    draftSettings: DraftSettingsDTO;
}
