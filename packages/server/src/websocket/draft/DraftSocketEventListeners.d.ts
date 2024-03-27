import { IWebSocketAdapter } from '../../../../contracts';
import { IDraftOrderSubject } from './IDraftOrderSubject';
export declare class DraftSocketEventListeners {
    private readonly socket;
    private readonly draftOrderSubject;
    constructor(socket: IWebSocketAdapter, draftOrderSubject: IDraftOrderSubject);
    setupEventListeners(): void;
}
