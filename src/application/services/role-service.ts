import boom from '@hapi/boom'
import { RoleRepository } from '../../domain/repositories/role-repository'
import { Role } from '../../domain/models/role'
import { CreateRoleDto } from '../dtos/role-dto'

class RoleService {
  private roleRepository: RoleRepository

  constructor (roleRepository: RoleRepository) {
    this.roleRepository = roleRepository
  }

  async createRole (roleDto: CreateRoleDto): Promise<Role> {
    console.log('-' + roleDto.name)
    const existingRole = await this.roleRepository.findByName(roleDto.name)
    console.log('---' + existingRole)
    if (existingRole !== null) {
      throw boom.conflict('name already exists')
    }
    const createdRole = await this.roleRepository.create(roleDto)
    return createdRole
  }

  // Implementa los demás métodos del servicio de usuarios
}

export default RoleService
