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
exports.SequelizeUserRepository = void 0;
const user_model_1 = require("./../models/user-model");
class SequelizeUserRepository {
    save(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.create(payload);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findByPk(id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findOne({ where: { email } });
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.update(payload, { where: { id } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.User.destroy({ where: { id } });
        });
    }
}
exports.SequelizeUserRepository = SequelizeUserRepository;
