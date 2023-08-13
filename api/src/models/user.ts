export type userParams = {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdTs: string;
};

export class User {
  private userId: string;
  private name: string;
  private email: string;
  private password: string;
  private role: string;
  private createdTs: string;

  constructor(userParams: userParams) {
    this.userId = userParams.userId;
    this.name = userParams.name;
    this.email = userParams.email;
    this.password = userParams.password;
    this.role = userParams.role;
    this.createdTs = userParams.createdTs;
  }

  get id(): string {
    return this.userId;
  }

  get userName(): string {
    return this.name;
  }

  get userEmail(): string {
    return this.email;
  }

  get roleName(): string {
    return this.role;
  }

  get passwordHash(): string {
    return this.password;
  }
}
