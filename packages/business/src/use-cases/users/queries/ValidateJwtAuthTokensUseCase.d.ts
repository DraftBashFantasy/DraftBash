import { UserResponse, IJwtAuthTokensService, IValidateJwtAuthTokensUseCase } from '../../../../../contracts';
export declare class ValidateJwtAuthTokensUseCase implements IValidateJwtAuthTokensUseCase {
    private readonly jwtAuthTokenService;
    constructor(jwtAuthTokenService: IJwtAuthTokensService);
    validateJWTtoken(jwtToken: string): Promise<UserResponse>;
}
