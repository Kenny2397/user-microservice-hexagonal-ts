"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const { swaggerDocs: V1SwaggerDocs } = require('./src/utils/docs/swagger')
app.get('/home', (_, res) => {
    res.send('Hola mi server user en Express');
});
/**
 * SERVER
 */
// const sequelize = require('./src/libs/sequelize')
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // await sequelize.authenticate()
    // .then(async () => {
    // await sequelize.sync({ force: true })
    console.info('\n====================== 🚀 Server running  =======================');
    console.info(`INFO:     http://localhost:${PORT} (Press CTRL+C to quit)`);
    console.info('INFO:     Waiting for application startup ...');
    console.info('INFO:     Sequelize Connected.');
    // V1SwaggerDocs(app, PORT)
    console.info('INFO:     Application startup complete.');
    // }).catch(error => {
    // console.error('INFO:     Cannot connect to database.', error)
    // })
}).on('error', (error) => {
    console.error('ERROR:    Cannot start server.', error);
    process.exit(1);
});
exports.default = app;
