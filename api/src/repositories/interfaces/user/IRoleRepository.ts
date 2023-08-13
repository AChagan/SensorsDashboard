import { roleParams, Role, createRoleParams } from '../../../models/role';

export interface IRoleRepository {
  saveRole(role: createRoleParams): Promise<Role | undefined>;
  findByName(role: string): Promise<Role | undefined>;
  deleteRoleByName(role: string): Promise<number>;
}
