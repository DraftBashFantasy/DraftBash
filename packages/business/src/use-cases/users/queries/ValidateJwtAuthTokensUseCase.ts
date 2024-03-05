import { UserResponse, IJwtAuthTokensService, IValidateJwtAuthTokensUseCase } from '../../../../../contracts';

export class ValidateJwtAuthTokensUseCase implements IValidateJwtAuthTokensUseCase {
    private readonly jwtAuthTokenService: IJwtAuthTokensService;

    constructor(jwtAuthTokenService: IJwtAuthTokensService) {
        this.jwtAuthTokenService = jwtAuthTokenService;
    }

    public async validateJWTtoken(jwtToken: string): Promise<UserResponse> {
        // Verifies the JWT token. If the verification fails, an InvalidJWTtokenError is thrown.
        const user: UserResponse = this.jwtAuthTokenService.verify(jwtToken);
        return user;
    }
}
