import { PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export class CategorieService{
      async findAll (request:Request, response:Response){
        try {
          const categorie = await prisma.categorie.findMany()
          response.json(categorie)
        } catch (error) {
          response.json(400)
        }

      }

      async findOne(request:Request, response:Response){
        try {
          const {id} = request.params
          const categorie = await prisma.categorie.findFirst({
              where:{id:Number(id)}
          })

          if(!categorie){
            response.json("Categoria não encontrada ou não existe")
          }
          response.json(categorie)
        } catch (error) {
          response.json(400)
        }
      }

      async insertCategorie(request:Request, response:Response){
        try {
          const {name}= request.body

          let categorie = await prisma.categorie.findUnique({where:{name}})

          if(categorie){
            return response.json({error:"Categoria não encontrada ou não existe"})
          }

          categorie = await prisma.categorie.create({data:{name}})

          response.json(categorie)
          } 
        catch (error) {
          response.json(400)
        }
      }

      async updateCategorie(requeste:Request, response:Response){
        try {
        const {id} =requeste.params
        const {name}= requeste.body

        let categorie = await prisma.categorie.findUnique({where:{id:Number(id)}})

        if(!categorie){
          return response.json({error:"Categoria não encontrada ou não existe"})
        }

        categorie = await prisma.categorie.update({
            where:{id:Number(id)},
            data:{name}
            })
        response.json(categorie)
        } catch (error) {
          response.json(400)
        }
        
      }

      async deleteCategorie(requeste:Request, response:Response) {
        try {
          const {id} = requeste.params
          const categorie= await prisma.categorie.findUnique({where:{id:Number(id)}})

           if(!categorie){
            return response.json({ error: "Categoria não encontrada ou não existe" });
           }

          await prisma.categorie.delete({ where:{id:Number(id)}})
        } catch (error) {
           response.json(400)
        }
            
      }

}



