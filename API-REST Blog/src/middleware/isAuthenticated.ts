import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/auth'

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
  }

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
           //{ iat: 1655332862, exp: 1655419262, sub: 'caio@udemy.com' }
           
            /*const {sub} = decodeToken as TokenPayload
            request.user={
                id:sub
            }*/

            return next()
        } catch (error) {
            response.json("Token JWT Inválido")
        }
    }
}