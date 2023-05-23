"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const envPath = path_1.default.resolve(__dirname, '..', '..', '.env');
dotenv_1.default.config({ path: envPath });
const config = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000,
    database: {
        dialect: 'mysql',
        host: (_b = process.env.DB_HOST) !== null && _b !== void 0 ? _b : 'localhost',
        port: (_c = process.env.DB_PORT) !== null && _c !== void 0 ? _c : 33061,
        username: (_d = process.env.DB_USERNAME) !== null && _d !== void 0 ? _d : 'root',
        password: (_e = process.env.DB_PASSWORD) !== null && _e !== void 0 ? _e : 'root',
        name: (_f = process.env.DB_NAME) !== null && _f !== void 0 ? _f : 'user_microservice'
    },
    jwtSecret: (_g = process.env.JWT_SECRET) !== null && _g !== void 0 ? _g : 'mysecret'
};
console.log(config);
exports.default = config;
