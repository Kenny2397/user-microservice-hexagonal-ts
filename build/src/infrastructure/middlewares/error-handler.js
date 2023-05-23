"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmErrorHandler = exports.BoomErrorHandler = exports.ErrorHandler = exports.LogErrors = void 0;
const sequelize_1 = require("sequelize");
const boom_1 = require("@hapi/boom");
function LogErrors(err, _req, _res, next) {
    console.log('----- Log errors ----');
    console.error(err.type);
    console.error(err.message);
    console.log('---------------------');
    next(err);
}
exports.LogErrors = LogErrors;
function ErrorHandler(err, _req, res, _next) {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}
exports.ErrorHandler = ErrorHandler;
function BoomErrorHandler(err, _req, res, next) {
    if (err instanceof boom_1.Boom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}
exports.BoomErrorHandler = BoomErrorHandler;
function OrmErrorHandler(err, _req, res, next) {
    if (err instanceof sequelize_1.ValidationError) {
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        });
    }
    next(err);
}
exports.OrmErrorHandler = OrmErrorHandler;
