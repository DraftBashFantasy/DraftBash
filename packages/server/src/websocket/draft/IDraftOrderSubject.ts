import { IDraftOrderObserver } from './IDraftOrderObserver';

export interface IDraftOrderSubject {
    addObserver(observer: IDraftOrderObserver): void;
    removeObserver(observer: IDraftOrderObserver): void;
    notifyObservers(): void;
    startObservers(draft: unknown, currentDraftOrderTurn: unknown): void;
}
