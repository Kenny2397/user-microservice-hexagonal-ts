import { Router } from 'express'
import passport from './../../authentication/index'
// import { userController } from './../dependencies/container'
import { userController } from '../dependencies/container'

const router = Router()

// const userRepository: IUserRepository = new SequelizeUserRepository()
// // const roleRepository: RoleRepository = new RoleRepositoryImpl()
// const userService: UserService = new UserService(userRepository)

// const userController: UserController = new UserController(userService)

router.post('/', userController.createUser.bind(userController))

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
