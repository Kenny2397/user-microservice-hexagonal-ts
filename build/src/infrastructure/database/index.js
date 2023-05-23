"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModels = void 0;
const user_model_1 = require("./models/user-model");
const role_model_1 = require("./models/role-model");
function setupModels(sequelize) {
    role_model_1.Role.init(role_model_1.RoleSchema, role_model_1.Role.config(sequelize));
    user_model_1.User.init(user_model_1.UserSchema, user_model_1.User.config(sequelize));
    role_model_1.Role.associate(sequelize.models);
    user_model_1.User.associate(sequelize.models);
}
exports.setupModels = setupModels;
