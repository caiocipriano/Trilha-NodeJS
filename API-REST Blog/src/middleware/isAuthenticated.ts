import { Request, Response, NextFunction } from 'express';
import { verify, Secret } from 'jsonwebtoken';

import auth from '../config/auth'

export default function isAuthenticated(
    request:Request, 
    response:Response,
    next:NextFunction
    ):void{
        const authHeader = request.headers['authorization'];

        if(!authHeader){
            response.json("Token JWT inválido")
        }

        if(authHeader){        
        const [, token]= authHeader.split(' '); 

        try {
            const decodeToken = verify(token, auth.jwt.secret)

            return next()
        } catch (error) {
            response.json("Token JWT Inválido")
        }
    }
}