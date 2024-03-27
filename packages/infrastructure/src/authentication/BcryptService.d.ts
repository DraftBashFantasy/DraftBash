import { IBcryptService } from '../../../contracts';
export declare class BcryptService implements IBcryptService {
    private readonly bcrypt;
    constructor();
    hashSync(password: string): string;
    compareSync(password: string, hashedPassword: string): boolean;
}
