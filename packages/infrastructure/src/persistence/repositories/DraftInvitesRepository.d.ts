import { DraftInvite } from '../../../../business';
export declare class DraftInvitesRepository {
    private db;
    constructor();
    insertDraftInvite(draftInvite: DraftInvite): Promise<void>;
}
