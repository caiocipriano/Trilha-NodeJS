import { UserService } from './UserService';
import { AppError } from './../error/appError';
import { PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'
import { compare } from 'bcrypt';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())


export class SessionService{
async createSession(email:any,password:any, response:Response){ 
    const userService = new UserService()   

      const user = await userService.findByEmail(email)
        
      if(!user){
        response.json("Email não encontrado")
      }

      const passwordConfirmed = await compare(password, user.password)

      if(!passwordConfirmed){
        response.json("Email / Senha estão incorretos")
      }
      return user
  }
}