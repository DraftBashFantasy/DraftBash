import { UserEntity } from '../../../business';
import { UserResponse, IJwtAuthTokensService } from '../../../contracts';
export declare class JwtAuthTokensService implements IJwtAuthTokensService {
    private readonly secret;
    private readonly jwt;
    constructor();
    sign(user: UserEntity): string;
    verify(jwtToken: string): UserResponse;
}
