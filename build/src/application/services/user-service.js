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
exports.UserService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const hash_service_1 = require("../../infrastructure/encryption/hash-service");
class UserService {
    constructor(userService, roleService) {
        this.userRepository = userService;
        this.roleRepository = roleService;
    }
    createUser(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('application');
            const existingUser = yield this.userRepository.findByEmail(userDto.email);
            if (existingUser != null) {
                throw boom_1.default.conflict('Email already exists');
            }
            const hashedPassword = yield (0, hash_service_1.hashPassword)(userDto.password);
            const userMapper = Object.assign(Object.assign({}, userDto), { password: hashedPassword });
            const createdUser = yield this.userRepository.save(userMapper);
            return createdUser;
        });
    }
    createOwner(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userRepository.findByEmail(userDto.email);
            if (existingUser != null) {
                throw boom_1.default.conflict('Email already exists');
            }
            const existingRole = yield this.roleRepository.findByName('Owner');
            if (existingRole == null) {
                throw boom_1.default.conflict('Role does not exist');
            }
            const hashedPassword = yield (0, hash_service_1.hashPassword)(userDto.password);
            const userMapper = Object.assign(Object.assign({}, userDto), { roleId: existingRole.id, password: hashedPassword });
            const createdUser = yield this.userRepository.save(userMapper);
            return createdUser;
        });
    }
    createEmployee(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userRepository.findByEmail(userDto.email);
            if (existingUser != null) {
                throw boom_1.default.conflict('Email already exists');
            }
            const existingRole = yield this.roleRepository.findByName('Employee');
            if (existingRole == null) {
                throw boom_1.default.conflict('Role does not exist');
            }
            const hashedPassword = yield (0, hash_service_1.hashPassword)(userDto.password);
            const userMapper = Object.assign(Object.assign({}, userDto), { roleId: existingRole.id, password: hashedPassword });
            const createdUser = yield this.userRepository.save(userMapper);
            return createdUser;
        });
    }
    createClient(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userRepository.findByEmail(userDto.email);
            if (existingUser != null) {
                throw boom_1.default.conflict('Email already exists');
            }
            const existingRole = yield this.roleRepository.findByName('Client');
            if (existingRole == null) {
                throw boom_1.default.conflict('Role does not exist');
            }
            const hashedPassword = yield (0, hash_service_1.hashPassword)(userDto.password);
            const userMapper = Object.assign(Object.assign({}, userDto), { roleId: existingRole.id, password: hashedPassword });
            const createdUser = yield this.userRepository.save(userMapper);
            return createdUser;
        });
    }
    login(email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            if (user == null) {
                throw boom_1.default.notFound('User not found');
            }
            // const isPasswordValid = await user.isPasswordValid(password)
            // if (!isPasswordValid) {
            //   throw boom.unauthorized('Invalid password')
            // }
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            if (user == null) {
                throw boom_1.default.notFound('User not found');
            }
            return user;
        });
    }
}
exports.UserService = UserService;
