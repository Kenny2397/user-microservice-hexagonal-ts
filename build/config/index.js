"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    port: process.env.PORT || 3000,
    database: {
        dialect: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'mydatabase'
    },
    jwtSecret: process.env.JWT_SECRET || 'mysecret'
};
