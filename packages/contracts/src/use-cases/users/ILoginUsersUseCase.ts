export interface ILoginUsersUseCase {
    loginUser(usernameOrEmail: string, password: string): Promise<string>;
}
