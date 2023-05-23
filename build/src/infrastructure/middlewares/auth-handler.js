"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoles = exports.checkApiKey = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const config_1 = __importDefault(require("../../config"));
// const models = require('./../libs/sequelize')
function checkApiKey(req, _res, next) {
    const apiKey = req.headers.api;
    if (apiKey === config_1.default.jwtSecret) {
        next();
    }
    else {
        next(boom_1.default.unauthorized());
    }
}
exports.checkApiKey = checkApiKey;
function checkRoles(...roles) {
    return (req, _res, next) => {
        try {
            const useri = req.user;
            if (roles.includes(useri.roleId)) {
                next();
            }
            else {
                throw boom_1.default.forbidden('The user does not have access to this route');
            }
        }
        catch (error) {
            next(error);
        }
    };
}
exports.checkRoles = checkRoles;
