export type createRoleParams = {
  name: string;
};

export type roleParams = {
  id: string;
  name: string;
};

export class Role {
  private id: string;
  private name: string;

  constructor(roleParams: roleParams) {
    this.id = roleParams.id;
    this.name = roleParams.name;
  }

  get roleName(): string {
    return this.name;
  }

  get roleId(): string {
    return this.id;
  }
}
