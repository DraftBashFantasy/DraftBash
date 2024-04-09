import { DraftInvite } from '../../../business/src/value-objects';

export interface IDraftInvitesRepository {
    insertDraftInvite(draftInvite: DraftInvite): Promise<void>;
}
