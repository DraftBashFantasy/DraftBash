"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUsersByUsernameUseCase = void 0;
const exceptions_1 = require("../../../exceptions");
class SearchUsersByUsernameUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async search(username) {
        const matchingUser = await this.userRepository.getUserByUsername(username);
        if (matchingUser != null) {
            return {
                userId: matchingUser.getUserId(),
                username: matchingUser.getUsername(),
                email: matchingUser.getEmail(),
            };
        }
        const similarUsernames = await this.userRepository.getUsernamesLikeUsername(username);
        throw new exceptions_1.UserNotFoundByUsernameError(similarUsernames, 'UserNotFoundByUsernameError');
    }
}
exports.SearchUsersByUsernameUseCase = SearchUsersByUsernameUseCase;
