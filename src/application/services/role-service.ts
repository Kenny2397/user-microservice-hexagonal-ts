import boom from '@hapi/boom'
import { IRoleRepository } from '../../domain/repositories/irole-repository'
import { RoleModel } from '../../domain/models/irole-model'
import { IRoleDTO } from '../dtos/role-dto'

class RoleService {
  private readonly roleRepository: IRoleRepository

  constructor (roleRepository: IRoleRepository) {
    this.roleRepository = roleRepository
  }

  async createRole (roleDto: IRoleDTO): Promise<RoleModel> {
    const existingRole = await this.roleRepository.findByName(roleDto.name)
    if (existingRole !== null) {
      throw boom.conflict('name already exists')
    }
    const createdRole = await this.roleRepository.save(roleDto)
    return createdRole
  }

  // Implementa los demás métodos del servicio de usuarios
}

export default RoleService
