import { UserResponse } from '../../rest-api/responses';
export interface ISearchUsersByUsernameUseCase {
    search(username: string): Promise<UserResponse>;
}
