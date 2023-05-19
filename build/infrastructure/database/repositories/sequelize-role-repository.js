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
const role_model_1 = __importDefault(require("./../models/role-model"));
class SequelizeRoleRepository {
    create(roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            return role_model_1.default.create(roleData);
        });
    }
    update(id, roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            return role_model_1.default.update(roleData, { where: { id } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.default.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.default.findByPk(id);
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.default.findOne({ where: { name } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield role_model_1.default.destroy({ where: { id } });
        });
    }
}
exports.default = SequelizeRoleRepository;
