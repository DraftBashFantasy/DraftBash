"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftSocketEventListeners = void 0;
class DraftSocketEventListeners {
    socket;
    draftOrderSubject;
    constructor(socket, draftOrderSubject) {
        this.socket = socket;
        this.draftOrderSubject = draftOrderSubject;
    }
    setupEventListeners() {
        this.socket.on('joinRoom', async (draftId) => {
            this.socket.joinRoom(draftId);
            this.draftOrderSubject.startObservers(draftId, 'Draft order');
        });
    }
}
exports.DraftSocketEventListeners = DraftSocketEventListeners;
