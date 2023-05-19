import { Router } from 'express'
import UserController from './../controllers/user-controller'
import UserService from '../../../application/services/user-service'
import { UserRepository } from '../../../domain/repositories/user-repository'
import UserRepositoryImpl from '../../database/repositories/sequelize-user-repository'

import { RoleRepository } from '../../../domain/repositories/role-repository'
import RoleRepositoryImpl from '../../database/repositories/sequelize-role-repository'
import { checkRoles } from '../../middlewares/auth-handler'
import { roles } from '../../../shared/constants/roles'

const userRepository: UserRepository = new UserRepositoryImpl()
const roleRepository: RoleRepository = new RoleRepositoryImpl()
const userService: UserService = new UserService(userRepository, roleRepository)
const userController: UserController = new UserController(userService)
const router = Router()

router.post('/', checkRoles(roles.ADMIN), userController.createUser.bind(userController))
router.post('/owner',
// checkRoles(roles.ADMIN),
  userController.createOwner.bind(userController))

export default router
