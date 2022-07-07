import { SessionController } from './../../controller/sessionController';
import { Request,Response } from 'express';
import { HttpRequest } from '../../controller/ports';


export const adaptRoute = (controller:SessionController)=>{
    return async (request:Request,response:Response)=>{
        const httpRequest:HttpRequest={
            body:request.body
        }
        const httpResponse = await controller.handle(httpRequest) //Resposta é a requisição
        response.status(httpResponse.statusCode).json(httpResponse.body)//Capturar o Status
    }
}