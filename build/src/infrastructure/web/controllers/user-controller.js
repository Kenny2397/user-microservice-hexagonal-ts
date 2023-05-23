"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./../../../config"));
const constants_1 = require("../utils/shared/constants");
// import { roles } from '../../../shared/constants/roles'
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            try {
                const { name, lastName, identifier, phone, email, password, roleId } = req.body;
                const userMapper = {
                    name,
                    lastName,
                    identifier,
                    phone,
                    email,
                    password,
                    roleId
                };
                const user = yield this.userService.createUser(userMapper);
                res.json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createOwner(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            try {
                const { name, lastName, identifier, phone, email, password } = req.body;
                const userDto = {
                    name,
                    lastName,
                    identifier,
                    phone,
                    email,
                    password,
                    roleId: constants_1.ROLES.OWNER
                };
                const user = yield this.userService.createOwner(userDto);
                res.status(200).json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastName, identifier, phone, email, password } = req.body;
                const userDto = {
                    name,
                    lastName,
                    identifier,
                    phone,
                    email,
                    password,
                    roleId: constants_1.ROLES.EMPLOYEE
                };
                const user = yield this.userService.createEmployee(userDto);
                res.status(200).json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastName, identifier, phone, email, password } = req.body;
                const userDto = {
                    name,
                    lastName,
                    identifier,
                    phone,
                    email,
                    password,
                    roleId: constants_1.ROLES.CLIENT
                };
                const user = yield this.userService.createClient(userDto);
                res.status(200).json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const payload = {
                    sub: user === null || user === void 0 ? void 0 : user.id,
                    roleId: user === null || user === void 0 ? void 0 : user.roleId
                };
                const token = jsonwebtoken_1.default.sign(payload, config_1.default.jwtSecret);
                res.status(200).json({
                    user,
                    token
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
