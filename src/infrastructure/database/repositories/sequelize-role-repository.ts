import Role from './../models/role-model'
import { Role as RoleDomain } from './../../../domain/models/role'
import { RoleRepository } from './../../../domain/repositories/role-repository'

class SequelizeRoleRepository implements RoleRepository {
  public async create (roleData: Omit<RoleDomain, 'id'>): Promise<Role> {
    return Role.create(roleData)
  }

  public async update (id: number, roleData: Omit<any, 'id'>): Promise<any> {
    return Role.update(roleData, { where: { id } })
  }

  public async findAll () {
    return await Role.findAll()
  }

  public async findById (id: number) {
    return await Role.findByPk(id)
  }

  public async findByName (name: string) {
    return await Role.findOne({ where: { name } })
  }

  public async delete (id: number): Promise<void> {
    await Role.destroy({ where: { id } })
  }
}

export default SequelizeRoleRepository
