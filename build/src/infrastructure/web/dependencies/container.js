"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_controller_1 = require("../controllers/user-controller");
const user_service_1 = require("../../../application/services/user-service");
const sequelize_user_repository_1 = require("../../database/repositories/sequelize-user-repository");
const userRepository = new sequelize_user_repository_1.SequelizeUserRepository();
const userService = new user_service_1.UserService(userRepository);
exports.userController = new user_controller_1.UserController(userService);
