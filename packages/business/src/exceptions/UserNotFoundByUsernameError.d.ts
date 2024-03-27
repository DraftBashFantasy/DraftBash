export declare class UserNotFoundByUsernameError extends Error {
    private readonly similarUsernames;
    constructor(similarUsernames: string[], message?: string);
    getSimilarUsernameUsers(): string[];
}
