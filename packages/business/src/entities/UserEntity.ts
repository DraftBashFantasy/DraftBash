import { BadRequestError } from '../exceptions';
import { UserCredentials } from '../value-objects';

export class UserEntity {
  private userId: number;

  private credentials: UserCredentials;

  constructor(userId: number, credentials: UserCredentials) {
    if (!Number.isInteger(userId) || userId <= 0) {
      throw new BadRequestError('userId is must be a positive integer.');
    }
    this.userId = userId;
    this.credentials = credentials;
  }

  getUserId(): number {
    return this.userId;
  }

  getUsername(): string {
    return this.credentials.getUsername();
  }

  getEmail(): string {
    return this.credentials.getEmail();
  }

  getPassword(): string {
    return this.credentials.getPassword();
  }
}
