export class UserNotFoundByUsernameError extends Error {
    private readonly similarUsernames: string[];

    constructor(similarUsernames: string[], message?: string) {
        super(message);
        this.name = 'UserNotFoundByUsernameError';
        this.similarUsernames = similarUsernames;

        Object.setPrototypeOf(this, new.target.prototype);
    }

    public getSimilarUsernameUsers(): string[] {
        return this.similarUsernames;
    }
}
