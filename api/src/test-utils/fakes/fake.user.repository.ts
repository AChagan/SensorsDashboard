import { User, userParams } from '../../models/user';
import { IUserRepository } from '../../repositories/interfaces/user/IUserRepository';

export class FakeUserRepository implements IUserRepository {
  users: User[] = [];

  constructor() {}

  public clearUsers() {
    this.users = [];
  }

  public async saveUser(user: userParams): Promise<User | undefined> {
    const userToBeSaved = new User(user);
    this.users.push(userToBeSaved);
    const savedUser = this.users.find((user) => user.id === userToBeSaved.id);
    return savedUser ? savedUser : undefined;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.userEmail === email);
    return user ? user : undefined;
  }

  public async findById(userId: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === userId);
    return user ? user : undefined;
  }
}
