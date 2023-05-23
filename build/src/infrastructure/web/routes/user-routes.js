"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./../../authentication/index"));
// import { userController } from './../dependencies/container'
const container_1 = require("../dependencies/container");
const router = (0, express_1.Router)();
// const userRepository: IUserRepository = new SequelizeUserRepository()
// // const roleRepository: RoleRepository = new RoleRepositoryImpl()
// const userService: UserService = new UserService(userRepository)
// const userController: UserController = new UserController(userService)
router.post('/', container_1.userController.createUser.bind(container_1.userController));
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
router.post('/owner', container_1.userController.createOwner.bind(container_1.userController));
router.post('/employee', 
// checkRoles(roles.ADMIN),
container_1.userController.createEmployee.bind(container_1.userController));
router.post('/login', index_1.default.authenticate('local', { session: false }), container_1.userController.login.bind(container_1.userController));
exports.default = router;
