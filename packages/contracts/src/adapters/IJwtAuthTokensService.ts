import { UserEntity } from '../../../business/src/entities/UserEntity';
import { UserResponse } from '../rest-api/responses';

export interface IJwtAuthTokensService {
    sign(user: UserEntity): string;
    verify(token: string): UserResponse;
}
