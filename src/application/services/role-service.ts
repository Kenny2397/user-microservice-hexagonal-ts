import boom from '@hapi/boom'
import { RoleRepository } from '../../domain/repositories/role-repository'
import { Role } from '../../domain/models/role'
import { IRoleDTO } from '../dtos/role-dto'

class RoleService {
  private readonly roleRepository: RoleRepository

  constructor (roleRepository: RoleRepository) {
    this.roleRepository = roleRepository
  }

  async createRole (roleDto: IRoleDTO): Promise<Role> {
    const existingRole = await this.roleRepository.findByName(roleDto.name)
    if (existingRole !== null) {
      throw boom.conflict('name already exists')
    }
    const createdRole = await this.roleRepository.create(roleDto)
    return createdRole
  }

  // Implementa los demás métodos del servicio de usuarios
}

export default RoleService
