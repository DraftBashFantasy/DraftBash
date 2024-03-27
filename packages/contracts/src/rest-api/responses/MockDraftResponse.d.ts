import { UserResponse } from './UserResponse';
import { DraftSettingsDTO } from '../shared';
export type MockDraftResponse = {
    draftId: number;
    scheduledByUser: UserResponse | null;
    draftSettings: DraftSettingsDTO;
};
