import { Role, CreateRole } from '../models/role'

export interface RoleRepository {
  findById(id: number): Promise<Role | null>;
  findByName(name: string): Promise<Role | null>;
  create(role: CreateRole): Promise<Role>;
  update(id: number, role: Role): Promise<any>;
  delete(id: number): Promise<void>;
  findAll(): Promise<Role[]>;
}
