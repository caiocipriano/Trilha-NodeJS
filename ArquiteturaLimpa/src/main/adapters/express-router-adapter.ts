import { Request,Response } from 'express';

import {RegisterAndSendEmailController} from '@/controllers/register-user-controller'
import { HttpRequest } from '@/controllers/ports';


export const adaptRoute = (controller:RegisterAndSendEmailController)=>{
    return async (req:Request,response:Response)=>{
        const httpRequest:HttpRequest={
            body:req.body
            
        }
        const httpResponse = await controller.handle(httpRequest)
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}