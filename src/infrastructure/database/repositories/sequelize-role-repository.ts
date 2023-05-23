import { Role } from './../models/role-model'
// import { IRoleDTO } from './../../../application/dtos/role-dto'
import { RoleModel } from '../../../domain/models/irole-model'
import { IRoleRepository } from '../../../domain/repositories/irole-repository'

export class SequelizeRoleRepository implements IRoleRepository {
  public async save (payload: RoleModel): Promise<RoleModel> {
    return await Role.create(payload)
  }

  public async update (id: number, roleData: Omit<any, 'id'>): Promise<any> {
    return await Role.update(roleData, { where: { id } })
  }

  public async findAll (): Promise<RoleModel[]> {
    return await Role.findAll()
  }

  public async findById (id: number): Promise<RoleModel | null> {
    return await Role.findByPk(id)
  }

  public async findByName (name: string): Promise<RoleModel | null> {
    return await Role.findOne({ where: { name } })
  }

  public async delete (id: number): Promise<void> {
    await Role.destroy({ where: { id } })
  }
}
