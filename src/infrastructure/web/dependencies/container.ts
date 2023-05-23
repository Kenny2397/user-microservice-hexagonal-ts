
import { UserController } from '../controllers/user-controller'
import { UserService } from '../../../application/services/user-service'
import { IUserRepository } from '../../../domain/repositories/iuser-repository'
import { SequelizeUserRepository } from '../../database/repositories/sequelize-user-repository'

import { IRoleRepository } from '../../../domain/repositories/irole-repository'
import { SequelizeRoleRepository } from '../../database/repositories/sequelize-role-repository'

const userRepository: IUserRepository = new SequelizeUserRepository()
const roleRepository: IRoleRepository = new SequelizeRoleRepository()

const userService: UserService = new UserService(userRepository, roleRepository)

export const userController: UserController = new UserController(userService)
