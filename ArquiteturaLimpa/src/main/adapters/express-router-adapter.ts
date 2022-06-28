import { Request,Response } from 'express';

import {RegisterUserController} from '@/controllers/register-user-controller'
import { HttpRequest } from '@/controllers/ports';


export const adaptRoute = (controller:RegisterUserController)=>{
    return async (req:Request,response:Response)=>{
        const httpRequest:HttpRequest={
            body:req.body
            
        }
        const httpResponse = await controller.handle(httpRequest)
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}