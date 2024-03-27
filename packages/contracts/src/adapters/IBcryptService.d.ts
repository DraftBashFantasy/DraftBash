export interface IBcryptService {
    hashSync(password: string): string;
    compareSync(password: string, hashedPassword: string): boolean;
}
