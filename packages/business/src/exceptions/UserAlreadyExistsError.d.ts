export declare class UserAlreadyExistsError extends Error {
    private readonly isUsernameUnique;
    private readonly isEmailUnique;
    constructor(isUsernameUnique: boolean, isEmailUnique: boolean, message?: string);
    getIsUsernameUnique(): boolean;
    getIsEmailUnique(): boolean;
}
