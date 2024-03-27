import { UserResponse, ISearchUsersByUsernameUseCase } from '../../../../../contracts';
import { IUsersRepository } from '../../../persistence';
export declare class SearchUsersByUsernameUseCase implements ISearchUsersByUsernameUseCase {
    private userRepository;
    constructor(userRepository: IUsersRepository);
    search(username: string): Promise<UserResponse>;
}
