import Role from './../models/role-model'
import { IRoleDTO } from './../../../application/dtos/role-dto'
import { Role as RoleDomain } from '../../../domain/models/role'
import { RoleRepository } from './../../../domain/repositories/role-repository'

class SequelizeRoleRepository implements RoleRepository {
  public async create (roleData: IRoleDTO): Promise<RoleDomain> {
    return await Role.create(roleData)
  }

  public async update (id: number, roleData: Omit<any, 'id'>): Promise<any> {
    return await Role.update(roleData, { where: { id } })
  }

  public async findAll (): Promise<RoleDomain[]> {
    return await Role.findAll()
  }

  public async findById (id: number): Promise<RoleDomain | null> {
    return await Role.findByPk(id)
  }

  public async findByName (name: string): Promise<RoleDomain | null> {
    return await Role.findOne({ where: { name } })
  }

  public async delete (id: number): Promise<void> {
    await Role.destroy({ where: { id } })
  }
}

export default SequelizeRoleRepository
