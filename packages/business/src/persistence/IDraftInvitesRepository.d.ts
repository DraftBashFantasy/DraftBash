import { DraftInvite } from '../value-objects';
export interface IDraftInvitesRepository {
    insertDraftInvite(draftInvite: DraftInvite): Promise<void>;
}
