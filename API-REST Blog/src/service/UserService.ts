
import { AppError } from './../error/appError';
import { PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'
import { hash } from 'bcrypt';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export class UserService{
      async findAll (request:Request, response:Response)  {
        try {
          const user = await prisma.user.findMany()
          response.json(user)
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
      }
      async findOne(request:Request, response:Response){
        try {
          const {id} = request.params

          /*const userRedis = await getRedis(`user-${id}`)
          const stringUserRedis = String(userRedis) 
          const user =JSON.parse(stringUserRedis)*/
          const userFinded = await prisma.user.findFirst({
              where:{Id:Number(id)}
          })

          if(!userFinded){
            response.json("Usuário não encontrado ou não existe")
          }
          response.json(userFinded)
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
      }

      async findByEmail(email:string){
        try {
          const user = await prisma.user.findUnique({
              where:{email}
          })

          if(!user){
            throw new AppError("Erro na requisição")
          }
          return user
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
      }


      async insertUser(request:Request, response:Response){
        try {
          const {name, email, password}= request.body

          let user = await prisma.user.findUnique({where:{email}})

          if(user){
            response.json("Email já cadastrado")
          }

          const hashed = await hash(password, 8)

          user = await prisma.user.create({
              data:{
                name,
                email,
                password:hashed
              }
          })
          response.json(user)
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
      }


      async updateUser(requeste:Request, response:Response){
        try {
        const {id} =requeste.params
        const {name,email,password}= requeste.body

        let user = await prisma.user.findUnique({where:{Id:Number(id)}})

        if(!user){
          response.json("Usuário não encontrado ou não existe")
        }


        user = await prisma.user.update({
            where:{Id:Number(id)},
            data:{
              name,
              email,
              password
            }
        })
        response.json(user)
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
        
      }

      async deleteUser(requeste:Request, response:Response) {
        try {
          const {id} = requeste.params
          const user= await prisma.user.findUnique({where:{Id:Number(id)}})

           if(!user){
            response.json("Usuário não encontrado ou não existe")
           }

          await prisma.user.delete({ where:{Id:Number(id)}})
        } catch (error) {
           throw new AppError("Erro na requisição")
        } 
      }
}



