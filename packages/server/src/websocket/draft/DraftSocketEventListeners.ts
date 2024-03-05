import { IWebSocketAdapter } from '../../../../contracts';
import { IDraftOrderSubject } from './IDraftOrderSubject';

export class DraftSocketEventListeners {
    private readonly socket: IWebSocketAdapter;

    private readonly draftOrderSubject: IDraftOrderSubject;

    constructor(socket: IWebSocketAdapter, draftOrderSubject: IDraftOrderSubject) {
        this.socket = socket;
        this.draftOrderSubject = draftOrderSubject;
    }

    public setupEventListeners() {
        this.socket.on('joinRoom', async (draftId: string) => {
            this.socket.joinRoom(draftId);
            this.draftOrderSubject.startObservers(draftId, 'Draft order');
        });
    }
}
