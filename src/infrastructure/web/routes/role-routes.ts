import { Router } from 'express'
import RoleController from './../controllers/role-controller'
import RoleService from '../../../application/services/role-service'
import { RoleRepository } from '../../../domain/repositories/role-repository'
import RoleRepositoryImpl from '../../database/repositories/sequelize-role-repository'

const roleRepository: RoleRepository = new RoleRepositoryImpl()
const roleService: RoleService = new RoleService(roleRepository)
const roleController: RoleController = new RoleController(roleService)

const router = Router()

router.post('/', roleController.createRole.bind(roleController))

export default router
