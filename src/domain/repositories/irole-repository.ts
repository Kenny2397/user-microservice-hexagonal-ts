import { RoleModel } from '../models/irole-model'

export interface IRoleRepository {
  findById: (id: number) => Promise<RoleModel | null>
  findByName: (name: string) => Promise<RoleModel | null>
  save: (role: RoleModel) => Promise<RoleModel>
  update: (id: number, role: RoleModel) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<RoleModel[]>
}
