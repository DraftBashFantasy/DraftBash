"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrderSubject = void 0;
class DraftOrderSubject {
    draftOrderObservers = [];
    addObserver(observer) {
        this.draftOrderObservers.push(observer);
    }
    removeObserver(observer) {
        this.draftOrderObservers = this.draftOrderObservers.filter((o) => o !== observer);
    }
    startObservers(draft, currentDraftOrderTurn) {
        this.draftOrderObservers.forEach((observer) => {
            observer.setDraft(draft);
            observer.update(currentDraftOrderTurn);
        });
    }
    notifyObservers() {
        // TODO: Implement logic for fetching the top of the draft order from the database.
        const currentDraftOrderTurn = 1;
        this.draftOrderObservers.forEach((observer) => observer.update(currentDraftOrderTurn));
    }
}
exports.DraftOrderSubject = DraftOrderSubject;
