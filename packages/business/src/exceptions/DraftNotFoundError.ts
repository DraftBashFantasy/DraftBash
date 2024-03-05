export class DraftNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DraftNotFoundError';
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
