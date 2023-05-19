import { Request, Response, NextFunction } from 'express'
import RoleService from './../../../application/services/role-service'

import { CreateRoleDto } from './../../../application/dtos/role-dto'

class RoleController {
  private roleService: RoleService

  constructor (roleService: RoleService) {
    this.roleService = roleService
  }

  async createRole (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, description } = req.body
      const roleDto: CreateRoleDto = {
        name,
        description
      }
      console.log(roleDto)
      const role = await this.roleService.createRole(roleDto)
      res.status(200).json(role)
    } catch (error) {
      next(error)
    }
  }

  // Implementa los demás métodos del controlador de usuarios
}

export default RoleController
