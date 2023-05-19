export interface CreateUser {
  name: string;
  lastName: string;
  identifier: bigint;
  phone: string;
  email: string;
  password: string;
  roleId: number;
}
