export interface User {
  id: number;
  name: string;
  lastName: string;
  identifier: bigint;
  phone: string;
  email: string;
  password: string;
  roleId: number;
  createdAt: Date;
}

export interface CreateUser {
  name: string;
  lastName: string;
  identifier: bigint;
  phone: string;
  email: string;
  password: string;
  roleId: number;
}
