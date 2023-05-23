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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeRoleRepository = void 0;
const role_model_1 = require("./../models/role-model");
class SequelizeRoleRepository {
    save(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.Role.create(payload);
        });
    }
    update(id, roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.Role.update(roleData, { where: { id } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.Role.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.Role.findByPk(id);
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield role_model_1.Role.findOne({ where: { name } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield role_model_1.Role.destroy({ where: { id } });
        });
    }
}
exports.SequelizeRoleRepository = SequelizeRoleRepository;
