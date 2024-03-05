import * as Jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
import { InvalidJwtTokenError, UserEntity } from '../../../business';
import { UserResponse, IJwtAuthTokensService } from '../../../contracts';

configDotenv();

export class JwtAuthTokensService implements IJwtAuthTokensService {
    private readonly secret: string;

    private readonly jwt;

    constructor() {
        this.secret = process.env.JWT_SECRET as string;
        this.jwt = Jwt;
    }

    sign(user: UserEntity): string {
        const jwtToken: string = this.jwt.sign(
            {
                userId: user.getUserId(),
                username: user.getUsername(),
                email: user.getEmail(),
            },
            this.secret,
            { expiresIn: '2hr' },
        );
        return jwtToken;
    }

    verify(jwtToken: string): UserResponse {
        try {
            const user: UserResponse = this.jwt.verify(jwtToken, this.secret) as UserResponse;
            return user;
        } catch (error: unknown) {
            throw new InvalidJwtTokenError('InvalidJWTtokenError');
        }
    }
}
