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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
// const { swaggerDocs: V1SwaggerDocs } = require('./src/utils/docs/swagger')
const swagger_1 = __importDefault(require("./infrastructure/web/utils/docs/swagger"));
const config_1 = __importDefault(require("./config"));
const sequelize_1 = __importDefault(require("./infrastructure/libs/sequelize"));
const envPath = path_1.default.resolve(__dirname, '..', '.env');
dotenv_1.default.config({ path: envPath });
app_1.default.get('/home', (_req, res) => {
    res.send('Hola mi server user en Express con ts');
});
/**
 * SERVER
 */
const PORT = (_a = config_1.default.port) !== null && _a !== void 0 ? _a : 3000;
app_1.default.listen(PORT, () => {
    sequelize_1.default.authenticate()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield sequelize_1.default.sync({ force: true });
        console.info('\n====================== 🚀 Server running  =======================');
        console.info(`INFO:     http://localhost:${PORT} (Press CTRL+C to quit)`);
        console.info('INFO:     Waiting for application startup ...');
        console.info('INFO:     Sequelize Connected.');
        (0, swagger_1.default)(app_1.default, PORT);
        console.info('INFO:     Application startup complete.');
    })).catch(error => {
        console.error('INFO:     Cannot connect to database.', error);
    });
}).on('error', (error) => {
    console.error('ERROR:    Cannot start server.', error);
    process.exit(1);
});
exports.default = app_1.default;
