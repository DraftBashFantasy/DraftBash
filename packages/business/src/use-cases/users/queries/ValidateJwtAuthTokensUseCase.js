"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateJwtAuthTokensUseCase = void 0;
class ValidateJwtAuthTokensUseCase {
    jwtAuthTokenService;
    constructor(jwtAuthTokenService) {
        this.jwtAuthTokenService = jwtAuthTokenService;
    }
    async validateJWTtoken(jwtToken) {
        // Verifies the JWT token. If the verification fails, an InvalidJWTtokenError is thrown.
        const user = this.jwtAuthTokenService.verify(jwtToken);
        return user;
    }
}
exports.ValidateJwtAuthTokensUseCase = ValidateJwtAuthTokensUseCase;
