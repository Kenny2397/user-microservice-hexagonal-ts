export interface UserDto {
  name: string;
  lastName: string;
  identifier: bigint;
  phone: string;
  email: string;
  password: string;
  roleId: number;
  createdAt: Date;
}

export interface CreateUserDto {
  name: string;
  lastName: string;
  identifier: bigint;
  phone: string;
  email: string;
  password: string;
  roleId: number;
}
