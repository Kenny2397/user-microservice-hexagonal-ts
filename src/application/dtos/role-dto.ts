export interface RoleDto {
  id: number;
  name: string;
  description: Text;
  createdAt: Date;
}

export interface CreateRoleDto {
  name: string;
  description: Text;
}
