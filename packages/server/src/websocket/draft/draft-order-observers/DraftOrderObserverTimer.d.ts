import { IWebSocketAdapter } from '../../../../../contracts';
import { IDraftOrderSubject } from '../IDraftOrderSubject';
import { IDraftOrderObserver } from '../IDraftOrderObserver';
export declare class DraftOrderObserverTimer implements IDraftOrderObserver {
    private readonly socket;
    private readonly draftOrderSubject;
    private draft;
    constructor(socket: IWebSocketAdapter, draftOrderSubject: IDraftOrderSubject);
    setDraft(draft: unknown): void;
    update(currentDraftOrderTurn: unknown): void;
}
