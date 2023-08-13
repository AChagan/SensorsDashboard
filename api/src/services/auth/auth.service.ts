import { User, userParams } from '../../models/user';
import { IUserRepository } from '../../repositories/interfaces/user/IUserRepository';

export class AuthService {
  userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async registerUser(userParams: userParams): Promise<User | undefined> {
    const savedUSer = await this.userRepository.saveUser(userParams);
    return savedUSer ? savedUSer : undefined;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findByEmail(email);
    return user ? user : undefined;
  }

  public async findByUserId(userId: string): Promise<User | undefined> {
    const user = await this.userRepository.findById(userId);
    return user ? user : undefined;
  }
}
