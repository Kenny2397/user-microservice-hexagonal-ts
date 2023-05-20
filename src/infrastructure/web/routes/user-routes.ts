import { Router } from 'express'
import UserController from './../controllers/user-controller'
import UserService from '../../../application/services/user-service'
import { UserRepository } from '../../../domain/repositories/user-repository'
import UserRepositoryImpl from '../../database/repositories/sequelize-user-repository'

import { RoleRepository } from '../../../domain/repositories/role-repository'
import RoleRepositoryImpl from '../../database/repositories/sequelize-role-repository'
import { checkRoles } from '../../middlewares/auth-handler'
import { roles } from '../../../shared/constants/roles'
import passport from './../../authentication/index'

const userRepository: UserRepository = new UserRepositoryImpl()
const roleRepository: RoleRepository = new RoleRepositoryImpl()
const userService: UserService = new UserService(userRepository, roleRepository)
const userController: UserController = new UserController(userService)
const router = Router()

router.post('/', checkRoles(roles.ADMIN), userController.createUser.bind(userController))

/**
 * @openapi
 * /api/v1/users/owner:
 *    post:
 *      tags:
 *        - User
 *      summary: "Create a new owner user"
 *      description: Create an owner user by validating in Administrator profile
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/User"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *            application/x-www-form-urlencoded:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/User"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        '400':
 *          description: "Error: Bad Request"
 *        '401':
 *          description: "Error: Unauthorized"
 *        '403':
 *          description: "Error: Forbidden"
 *        '409':
 *          description: "Error: Conflict"
 *      security:
 *        - bearerAuth: []
 */
router.post('/owner',
  userController.createOwner.bind(userController))
router.post('/employee',
// checkRoles(roles.ADMIN),
  userController.createEmployee.bind(userController))

router.post('/login', passport.authenticate('local', { session: false }), userController.login.bind(userController))

export default router
