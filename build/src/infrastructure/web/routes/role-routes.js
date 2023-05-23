"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = __importDefault(require("./../controllers/role-controller"));
const role_service_1 = __importDefault(require("../../../application/services/role-service"));
const sequelize_role_repository_1 = require("../../database/repositories/sequelize-role-repository");
const roleRepository = new sequelize_role_repository_1.SequelizeRoleRepository();
const roleService = new role_service_1.default(roleRepository);
const roleController = new role_controller_1.default(roleService);
const router = (0, express_1.Router)();
router.post('/', roleController.createRole.bind(roleController));
exports.default = router;
