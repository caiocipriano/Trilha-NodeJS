
import { PrismaClient } from '@prisma/client'
import express, { Response }  from 'express'
import { compare } from 'bcrypt';
import {sign} from 'jsonwebtoken'
import { setRedis } from '../lib/cache';


import { UserService } from './UserService';
import auth from '../config/auth';

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

      const token = sign({}, auth.jwt.secret, {
        subject:user.email,
        expiresIn:auth.jwt.expiresIn
      })

      await setRedis(`user-${user.Id}`, JSON.stringify(user))

      return {user,token}
  }
}