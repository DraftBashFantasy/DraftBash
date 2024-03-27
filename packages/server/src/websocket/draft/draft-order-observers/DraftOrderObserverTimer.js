"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrderObserverTimer = void 0;
class DraftOrderObserverTimer {
    socket;
    draftOrderSubject;
    draft;
    constructor(socket, draftOrderSubject) {
        this.socket = socket;
        this.draftOrderSubject = draftOrderSubject;
    }
    setDraft(draft) {
        this.draft = draft;
    }
    update(currentDraftOrderTurn) {
        let seconds = 20;
        console.log(this.draft);
        const updateTimerInterval = setInterval(() => {
            this.socket.emitToRoom(this.draft, 'updateTimer', seconds);
            if (seconds <= 0) {
                this.draftOrderSubject.notifyObservers();
                clearInterval(updateTimerInterval); // Stop the interval when the timer expires
            }
            seconds -= 1;
        }, 1000);
    }
}
exports.DraftOrderObserverTimer = DraftOrderObserverTimer;
