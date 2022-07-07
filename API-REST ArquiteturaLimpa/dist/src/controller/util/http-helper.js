"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.badRequest = exports.created = void 0;
const created = (data) => ({
    statusCode: 201,
    body: data
});
exports.created = created;
const badRequest = (data) => ({
    statusCode: 400,
    body: data
});
exports.badRequest = badRequest;
const serverError = (data) => ({
    statusCode: 500,
    body: data
});
exports.serverError = serverError;
