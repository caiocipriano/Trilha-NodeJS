import { UserService } from './UserService';
import { AppError } from './../error/appError';
import { PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'
import { compare } from 'bcrypt';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())


export class SessionService{
async createSession(email:any,password:any){ 
    const userService = new UserService()   

      const user = await userService.findByEmail(email)
        
      if(!user){
        throw new AppError("Erro na requisição",401)
      }

      const passwordConfirmed = await compare(password, user.password)

      if(!passwordConfirmed){
        throw new AppError("Erro na requisição",404)
      }
      return user
  }
}