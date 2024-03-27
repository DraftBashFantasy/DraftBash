import { UserResponse } from '../../rest-api/responses';
export interface IValidateJwtAuthTokensUseCase {
    validateJWTtoken(jwtToken: string): Promise<UserResponse>;
}
