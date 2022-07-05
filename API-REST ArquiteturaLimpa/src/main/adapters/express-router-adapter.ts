import { SessionController } from './../../controller/sessionController';
import { Request,Response } from 'express';
import { HttpRequest } from '../../controller/ports';


export const adaptRoute = (controller:SessionController)=>{
    return async (req:Request,response:Response)=>{
        const httpRequest:HttpRequest={
            body:req.body
            
        }
        const httpResponse = await controller.handle(httpRequest)
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}