import { userParams, User } from '../../../models/user';

export interface IUserRepository {
  saveUser(user: userParams): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(userId: string): Promise<User | undefined>;
}
