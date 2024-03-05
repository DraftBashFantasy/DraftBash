import { IDraftOrderSubject } from './IDraftOrderSubject';
import { IDraftOrderObserver } from './IDraftOrderObserver';

export class DraftOrderSubject implements IDraftOrderSubject {
    private draftOrderObservers: IDraftOrderObserver[] = [];

    addObserver(observer: IDraftOrderObserver): void {
        this.draftOrderObservers.push(observer);
    }

    removeObserver(observer: IDraftOrderObserver): void {
        this.draftOrderObservers = this.draftOrderObservers.filter((o) => o !== observer);
    }

    startObservers(draft: unknown, currentDraftOrderTurn: unknown): void {
        this.draftOrderObservers.forEach((observer) => {
            observer.setDraft(draft);
            observer.update(currentDraftOrderTurn);
        });
    }

    notifyObservers(): void {
        // TODO: Implement logic for fetching the top of the draft order from the database.
        const currentDraftOrderTurn = 1;
        this.draftOrderObservers.forEach((observer) => observer.update(currentDraftOrderTurn));
    }
}
