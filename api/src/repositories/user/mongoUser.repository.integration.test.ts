import { User } from '../../models/user';
import { setupDB } from '../../test-utils/setupDB';
import { MongoBackedRoleRepository } from './mongoRole.repository';
import { MongoBackedUserRepository } from './mongoUser.repository';
import { v4 as uuidv4 } from 'uuid';

describe('MongoUserRepository', () => {
  setupDB();

  const mongoBackedRoleRepository = new MongoBackedRoleRepository();
  const mongoBackedUserRepository = new MongoBackedUserRepository();

  beforeAll(async () => {
    await mongoBackedRoleRepository.saveRole({ name: 'user' });
  });

  describe('saveUser', () => {
    it('should save a user', async () => {
      //Given
      const createdTs = new Date().toISOString();
      const userId = uuidv4();
      const user = new User({
        name: 'any-name',
        userId: userId,
        email: 'any-email',
        password: 'any-password',
        role: 'user',
        createdTs: createdTs,
      });

      //When
      const savedUser = await mongoBackedUserRepository.saveUser({
        name: 'any-name',
        userId: userId,
        email: 'any-email',
        password: 'any-password',
        role: 'user',
        createdTs: createdTs,
      });

      //Then
      expect(savedUser).toEqual(user);
    });
  });

  describe('findByEmail', () => {
    afterEach(async () => {
      await mongoBackedUserRepository.UserModel.deleteMany({});
    });

    it('should find a user by email', async () => {
      //Given
      const createdTs = new Date().toISOString();

      const userId = uuidv4();
      const user = new User({
        name: 'any-name',
        userId: userId,
        email: 'the-user-email',
        password: 'any-password',
        role: 'user',
        createdTs: createdTs,
      });

      await mongoBackedUserRepository.saveUser({
        name: 'any-name',
        userId: userId,
        email: 'the-user-email',
        password: 'any-password',
        role: 'user',
        createdTs: createdTs,
      });

      //When
      const foundUser = await mongoBackedUserRepository.findByEmail(
        'the-user-email',
      );

      //Then
      expect(foundUser).toEqual(user);
    });

    it('should return undefined if user not found', async () => {
      //When
      const foundUser = await mongoBackedUserRepository.findByEmail(
        'the-user-email',
      );

      //Then
      expect(foundUser).toBeUndefined();
    });
  });

  describe('findById', () => {
    afterEach(async () => {
      await mongoBackedUserRepository.UserModel.deleteMany({});
    });

    it('should find a user by id', async () => {
      //Given
      const createdTs = new Date().toISOString();
      const userId = uuidv4();
      const user = new User({
        name: 'any-name',
        userId: userId,
        email: 'the-user-email',
        password: 'any-password',
        role: 'user',
        createdTs: createdTs,
      });

      await mongoBackedUserRepository.saveUser({
        name: 'any-name',
        userId: userId,
        email: 'the-user-email',
        password: 'any-password',
        role: 'user',
        createdTs: createdTs,
      });

      //When
      const foundUser = await mongoBackedUserRepository.findById(userId);

      //Then
      expect(foundUser).toEqual(user);
    });

    it('should return undefined if user not found', async () => {
      //When
      const foundUser = await mongoBackedUserRepository.findById('the-user-id');

      //Then
      expect(foundUser).toBeUndefined();
    });
  });
});
