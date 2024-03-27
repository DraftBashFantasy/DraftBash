import { CreateUserRequest } from '../../rest-api/requests';
export interface ICreateUsersUseCase {
    create(createUserRequest: CreateUserRequest): Promise<string>;
}
