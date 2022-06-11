import { PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export class CategorieService{
    async findAll (request:Request, response:Response)  {
        const movie = await prisma.categorie.findMany()
        response.json(movie)
      }

      async findOne(request:Request, response:Response){
        const {id} = request.params
        const categorie = await prisma.categorie.findFirst({
            where:{id:Number(id)}
        })
        response.json(categorie)
      }

      async insertCategorie(request:Request, response:Response){
        const {name}= request.body
        const categorie = await prisma.categorie.create({
            data:{
              name
            }
        })
        response.json(categorie)
      }
      async updateCategorie(requeste:Request, response:Response){
        const {id} =requeste.params
        const {name}= requeste.body
        const categorie = await prisma.categorie.update({
            where:{id:Number(id)},
            data:{
                name
            }
        })
        response.json(categorie)
      }

      async deleteCategorie(requeste:Request, response:Response) {
            const {id} = requeste.params
            const categorie = await prisma.categorie.delete({
                where:{id:Number(id)}
            })

        response.json(categorie)
      }

}



