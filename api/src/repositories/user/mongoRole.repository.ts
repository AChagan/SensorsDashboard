import { Role, createRoleParams, roleParams } from '../../models/role';
import { RoleModel } from '../../schemas/user/role.schema';
import { IRoleRepository } from '../interfaces/user/IRoleRepository';

export class MongoBackedRoleRepository implements IRoleRepository {
  RoleModel = RoleModel;
  constructor() {}

  public async saveRole(role: createRoleParams): Promise<Role> {
    const validRoles = ['user', 'admin'];

    if (!validRoles.includes(role.name)) {
      throw new Error('Invalid role name provided');
    }

    const savedRole = await this.RoleModel.create(role);
    return this.mapDocumentToDomain(savedRole);
  }

  public async findByName(role: string): Promise<Role | undefined> {
    const foundRole = await this.RoleModel.findOne({ name: role });
    return foundRole ? this.mapDocumentToDomain(foundRole) : undefined;
  }

  public async deleteRoleByName(role: string): Promise<number> {
    const deletedRole = await this.RoleModel.deleteMany({ name: role });
    const deletedCount = deletedRole.deletedCount;
    return deletedCount;
  }

  private mapDocumentToDomain(role: any): Role {
    return new Role({
      id: role._id.toString(),
      name: role.name,
    });
  }
}
