import { Role } from '../../models/role';
import { setupDB } from '../../test-utils/setupDB';
import { MongoBackedRoleRepository } from './mongoRole.repository';

describe('Role Repository Integration Test', () => {
  setupDB();

  const mongoBackedSensorReadingsRepository = new MongoBackedRoleRepository();

  describe('saveRole', () => {
    afterEach(async () => {
      await mongoBackedSensorReadingsRepository.deleteRoleByName('user');
    });

    it('should save a role', async () => {
      // When
      const savedRole = await mongoBackedSensorReadingsRepository.saveRole({
        name: 'user',
      });

      // Then
      expect(savedRole.roleName).toStrictEqual('user');
    });

    it('should throw an error if an invalid role name is provided', async () => {
      // Given/When
      const saveRole = async () => {
        await mongoBackedSensorReadingsRepository.saveRole({
          name: 'any-role-name',
        });
      };

      // Then
      expect(saveRole).rejects.toThrow('Invalid role name provided');
    });
  });

  describe('findByName', () => {
    beforeAll(async () => {
      await mongoBackedSensorReadingsRepository.saveRole({ name: 'user' });
    });

    afterAll(async () => {
      await mongoBackedSensorReadingsRepository.deleteRoleByName('user');
    });

    it('should find a role by name', async () => {
      // When
      const foundRole = await mongoBackedSensorReadingsRepository.findByName(
        'user',
      );

      // Then
      expect(foundRole).toBeDefined();
      expect(foundRole!.roleName).toStrictEqual('user');
    });

    it('should return undefined if a role is not found', async () => {
      // Given/When
      const foundRole = await mongoBackedSensorReadingsRepository.findByName(
        'any-role-name',
      );

      // Then
      expect(foundRole).toBe(undefined);
    });
  });

  describe('deleteRoleByName', () => {
    it('should delete a role by name', async () => {
      // Given
      await mongoBackedSensorReadingsRepository.saveRole({ name: 'user' });

      // When
      const deletedRole =
        await mongoBackedSensorReadingsRepository.deleteRoleByName('user');

      // Then
      expect(deletedRole).toBe(1);
    });
  });
});
