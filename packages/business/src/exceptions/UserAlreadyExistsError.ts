export class UserAlreadyExistsError extends Error {
    private readonly isUsernameUnique: boolean;

    private readonly isEmailUnique: boolean;

    constructor(isUsernameUnique: boolean, isEmailUnique: boolean, message?: string) {
        super(message);
        this.name = 'UserAlreadyExistsError';
        this.isUsernameUnique = isUsernameUnique;
        this.isEmailUnique = isEmailUnique;

        Object.setPrototypeOf(this, new.target.prototype);
    }

    public getIsUsernameUnique(): boolean {
        return this.isUsernameUnique;
    }

    public getIsEmailUnique(): boolean {
        return this.isEmailUnique;
    }
}
