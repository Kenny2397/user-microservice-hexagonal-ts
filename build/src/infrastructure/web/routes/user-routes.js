"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./../../authentication/index"));
const container_1 = require("../dependencies/container");
const auth_handler_1 = require("../../middlewares/auth-handler");
const constants_1 = require("./../utils/shared/constants");
const router = (0, express_1.Router)();
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
router.post('/', index_1.default.authenticate('jwt', { session: false }), (0, auth_handler_1.checkRoles)(constants_1.ROLES.ADMIN), container_1.userController.createUser.bind(container_1.userController));
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
router.post('/owner', index_1.default.authenticate('jwt', { session: false }), (0, auth_handler_1.checkRoles)(constants_1.ROLES.ADMIN), container_1.userController.createOwner.bind(container_1.userController));
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
router.post('/employee', index_1.default.authenticate('jwt', { session: false }), (0, auth_handler_1.checkRoles)(constants_1.ROLES.OWNER), container_1.userController.createEmployee.bind(container_1.userController));
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
router.post('/client', container_1.userController.createClient.bind(container_1.userController));
/**
 * @openapi
 * /api/v1/users/login:
 *    post:
 *      tags:
 *        - Login
 *      summary: "Login user"
 *      description: Iniciar sesion a un nuevo usuario y obtener el token de sesión
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/Login"
 *      responses:
 *        '200':
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Login"
 *            application/xml:
 *              schema:
 *                $ref: '#/components/schemas/Login'
 *        '400':
 *          description: "Error: Bad Request"
 *        '401':
 *          description: "Error: Unauthorized"
 *        '409':
 *          description: "Error: Conflict"
 */
router.post('/login', index_1.default.authenticate('local', { session: false }), container_1.userController.login.bind(container_1.userController));
exports.default = router;
