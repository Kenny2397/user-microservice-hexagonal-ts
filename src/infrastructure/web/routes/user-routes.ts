import { Router } from 'express'
import passport from './../../authentication/index'
import { userController } from '../dependencies/container'
import { checkRoles } from '../../middlewares/auth-handler'
import { ROLES } from './../utils/shared/constants'

const router = Router()

/**
 * @openapi
 * /api/v1/users:
 *    post:
 *      tags:
 *        - User
 *      summary: "Create a new User"
 *      description: Crear un nuevo usuario
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/Usermaster"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/Usermaster'
 *            application/x-www-form-urlencoded:
 *              schema:
 *                $ref: '#/components/schemas/Usermaster'
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Usermaster"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/Usermaster'
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
router.post('/', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.ADMIN), userController.createUser.bind(userController))

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
router.post('/owner', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.ADMIN), userController.createOwner.bind(userController))

/**
 * @openapi
 * /api/v1/users/employee:
 *    post:
 *      tags:
 *        - User
 *      summary: "Create a new employee user"
 *      description: Create an employee user by validating in Owner profile
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
router.post('/employee', passport.authenticate('jwt', { session: false }), checkRoles(ROLES.OWNER), userController.createEmployee.bind(userController))

/**
 * @openapi
 * /api/v1/users/client:
 *    post:
 *      tags:
 *        - User
 *      summary: "Create a new client user"
 *      description: Create an client user without validations
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
 */
router.post('/client', userController.createClient.bind(userController))

router.post('/login', passport.authenticate('local', { session: false }), userController.login.bind(userController))

export default router
