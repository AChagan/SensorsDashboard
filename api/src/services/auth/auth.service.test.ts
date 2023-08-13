import { FakeUserRepository } from '../../test-utils/fakes/fake.user.repository';
import { AuthService } from './auth.service';

describe('Auth Service Test', () => {
  const fakeUserRepository = new FakeUserRepository();
  const authService = new AuthService(fakeUserRepository);

  describe('registerUser', () => {
    afterEach(() => {
      fakeUserRepository.clearUsers();
    });

    it('should register a user', async () => {
      //Given
      const user = {
        userId: 'the-user-id',
        name: 'the-user-name',
        email: 'the-user-email',
        password: 'the-user-password',
        role: 'user',
        createdTs: new Date().toISOString(),
      };

      //When
      const registeredUser = await authService.registerUser(user);

      //Then
      expect(registeredUser).toBeDefined();
      expect(registeredUser?.id).toBe('the-user-id');
      expect(registeredUser?.userName).toBe('the-user-name');
      expect(registeredUser?.userEmail).toBe('the-user-email');
      expect(registeredUser?.roleName).toBe('user');
    });
  });

  describe('findByEmail', () => {
    afterEach(() => {
      fakeUserRepository.clearUsers();
    });

    it('should find a user by email', async () => {
      //Given
      const user = {
        userId: 'any-user-id',
        name: 'any-user-name',
        email: 'the-user-email',
        password: 'any-user-password',
        role: 'user',
        createdTs: new Date().toISOString(),
      };

      await authService.registerUser(user);

      //When
      const foundUser = await authService.findByEmail('the-user-email');

      //Then
      expect(foundUser).toBeDefined();
      expect(foundUser?.id).toBe('any-user-id');
      expect(foundUser?.userName).toBe('any-user-name');
      expect(foundUser?.userEmail).toBe('the-user-email');
      expect(foundUser?.roleName).toBe('user');
    });
  });

  describe('findByUserId', () => {
    afterEach(() => {
      fakeUserRepository.clearUsers();
    });

    it('should find a user by userId', async () => {
      //Given
      const user = {
        userId: 'the-user-id',
        name: 'any-user-name',
        email: 'any-user-email',
        password: 'any-user-password',
        role: 'user',
        createdTs: new Date().toISOString(),
      };

      await authService.registerUser(user);

      //When
      const foundUser = await authService.findByUserId('the-user-id');

      //Then
      expect(foundUser).toBeDefined();
      expect(foundUser?.id).toBe('the-user-id');
      expect(foundUser?.userName).toBe('any-user-name');
      expect(foundUser?.userEmail).toBe('any-user-email');
      expect(foundUser?.roleName).toBe('user');
    });
  });
});
