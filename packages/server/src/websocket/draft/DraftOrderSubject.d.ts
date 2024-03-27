import { IDraftOrderSubject } from './IDraftOrderSubject';
import { IDraftOrderObserver } from './IDraftOrderObserver';
export declare class DraftOrderSubject implements IDraftOrderSubject {
    private draftOrderObservers;
    addObserver(observer: IDraftOrderObserver): void;
    removeObserver(observer: IDraftOrderObserver): void;
    startObservers(draft: unknown, currentDraftOrderTurn: unknown): void;
    notifyObservers(): void;
}
