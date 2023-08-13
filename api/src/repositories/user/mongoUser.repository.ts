import { userParams, User } from '../../models/user';
import { UserModel } from '../../schemas/user/user.schema';
import { IUserRepository } from '../interfaces/user/IUserRepository';

export class MongoBackedUserRepository implements IUserRepository {
  UserModel = UserModel;
  constructor() {}

  public async saveUser(user: userParams): Promise<User | undefined> {
    const savedUser = await this.UserModel.create(user);
    return this.mapDocumentToDomain(savedUser);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const foundUser = await this.UserModel.findOne({ email: email });
    return foundUser ? this.mapDocumentToDomain(foundUser) : undefined;
  }

  public async findById(userId: string): Promise<User | undefined> {
    const foundUser = await this.UserModel.findOne({ userId: userId });
    return foundUser ? this.mapDocumentToDomain(foundUser) : undefined;
  }

  private mapDocumentToDomain(user: any): User {
    return new User({
      userId: user.userId,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      createdTs: user.createdTs,
    });
  }
}
