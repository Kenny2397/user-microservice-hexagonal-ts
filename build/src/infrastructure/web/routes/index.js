"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user-routes"));
const role_routes_1 = __importDefault(require("./role-routes"));
function RouterApi(app) {
    const router = express_1.default.Router();
    app.use('/api/v1', router);
    router.use('/users', user_routes_1.default);
    router.use('/roles', role_routes_1.default);
}
exports.default = RouterApi;
