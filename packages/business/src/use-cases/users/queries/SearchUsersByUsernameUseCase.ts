import { UserResponse, ISearchUsersByUsernameUseCase } from '../../../../../contracts';
import { UserEntity } from '../../../entities';
import { IUsersRepository } from '../../../../../contracts/src/persistence';
import { UserNotFoundByUsernameError } from '../../../exceptions';

export class SearchUsersByUsernameUseCase implements ISearchUsersByUsernameUseCase {
    private userRepository: IUsersRepository;

    constructor(userRepository: IUsersRepository) {
        this.userRepository = userRepository;
    }

    async search(username: string): Promise<UserResponse> {
        const matchingUser: UserEntity | null = await this.userRepository.getUserByUsername(username);

        if (matchingUser != null) {
            return {
                userId: matchingUser.getUserId(),
                username: matchingUser.getUsername(),
                email: matchingUser.getEmail(),
            };
        }

        const similarUsernames: string[] = await this.userRepository.getUsernamesLikeUsername(username);

        throw new UserNotFoundByUsernameError(similarUsernames, 'UserNotFoundByUsernameError');
    }
}
