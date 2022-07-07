"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (request, response) => {
        const httpRequest = {
            body: request.body
        };
        const httpResponse = await controller.handle(httpRequest); //Resposta é a requisição
        response.status(httpResponse.statusCode).json(httpResponse.body); //Capturar o Status
    };
};
exports.adaptRoute = adaptRoute;
