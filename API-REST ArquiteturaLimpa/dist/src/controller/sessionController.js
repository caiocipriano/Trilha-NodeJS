"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const missing_param_error_1 = require("./errors/missing-param-error");
const http_helper_1 = require("./util/http-helper");
class SessionController {
    constructor(usercase) {
        this.usecase = usercase;
    }
    async handle(request) {
        try {
            if (!(request.body.title) || !(request.body.genre)) {
                return (0, http_helper_1.badRequest)(new missing_param_error_1.MissingParamError('Some empty field'));
            }
            const sessionData = request.body;
            const response = await this.usecase.perform(sessionData);
            if (!response) {
                return (0, http_helper_1.badRequest)(response.value);
            }
            return (0, http_helper_1.created)(response);
        }
        catch (error) {
            return (0, http_helper_1.serverError)(error);
        }
    }
}
exports.SessionController = SessionController;
