"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
/**
 * ROUTES
*/
// import RouterApi from './infrastructure/web/routes/index'
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:3000'
];
const allowedHeaders = [
    'Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept',
    'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods',
    'Access-Control-Allow-Credentials'
];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
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
/**
 * CONFIGS
*/
app.use(express_1.default.json(), express_1.default.urlencoded({ extended: true }));
/**
 * MIDDLEWARES
*/
// const {
//   LogErrors,
//   ErrorHandler,
//   BoomErrorHandler,
//   OrmErrorHandler
// } = require('./src/middlewares/error.handler')
/**
 * AUTH
 */
// require('./src/utils/auth/index')
// app.get('/home', (req, res) => {
//   res.send('Hola mi server user en Express')
// })
// RouterApi(app)
/**
 * ERRORS MIDDLEWARES
 */
// app.use(LogErrors)
// app.use(BoomErrorHandler)
// app.use(OrmErrorHandler)
// app.use(ErrorHandler)
exports.default = app;
