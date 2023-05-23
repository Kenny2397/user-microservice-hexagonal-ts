"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./infrastructure/web/routes"));
const error_handler_1 = require("./infrastructure/middlewares/error-handler");
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:4000'
];
const allowedHeaders = [
    'Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept',
    'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods',
    'Access-Control-Allow-Credentials'
];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || origin === undefined || origin === null) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json(), express_1.default.urlencoded({ extended: true }));
/**
 * AUTH
 */
// require('./src/utils/auth/index')
app.get('/homeapp', (_req, res) => {
    res.send('Hola mi server user en Express ts desde app');
});
(0, routes_1.default)(app);
app.use(error_handler_1.LogErrors);
app.use(error_handler_1.BoomErrorHandler);
app.use(error_handler_1.OrmErrorHandler);
app.use(error_handler_1.ErrorHandler);
exports.default = app;
