"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URI = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const database_1 = require("../database");
const USER = encodeURIComponent(config_1.default.database.username);
const PASSWORD = encodeURIComponent(config_1.default.database.password);
const DATABASE = encodeURIComponent(config_1.default.database.dialect);
exports.URI = `${DATABASE}://${USER}:${PASSWORD}@${config_1.default.database.host}:${config_1.default.database.port}/${config_1.default.database.name}`;
const sequelize = new sequelize_1.Sequelize(exports.URI, {
    dialect: 'mysql',
    host: 'localhost',
    logging: (msg) => console.log(`Sequelize: ${msg}`)
});
(0, database_1.setupModels)(sequelize);
exports.default = sequelize;
