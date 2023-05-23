import { Router } from 'express'
import RoleController from './../controllers/role-controller'
import RoleService from '../../../application/services/role-service'
import { IRoleRepository } from '../../../domain/repositories/irole-repository'
import { SequelizeRoleRepository } from '../../database/repositories/sequelize-role-repository'

const roleRepository: IRoleRepository = new SequelizeRoleRepository()
const roleService: RoleService = new RoleService(roleRepository)
const roleController: RoleController = new RoleController(roleService)

const router = Router()

router.post('/', roleController.createRole.bind(roleController))

export default router
