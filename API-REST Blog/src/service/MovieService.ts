import { PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'
import { request } from 'http'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

//Filmes
//Listando todos os Filmes e a categoria é exibida com o id
export class MovieService{
    async findAll (request:Request, response:Response)  {
      try {
        const movie = await prisma.movie.findMany()
        response.json(movie)
      } catch (error) {
        response.json(400)
      }

    }

      async findOne(request:Request, response:Response){
        try {
          const {id} = request.params
          const movie = await prisma.movie.findFirst({
              where:{Id:Number(id)},include:{categorie:true}
          })

          if(!movie){
            response.json("Filme não encontrado ou não existe")
          }
          response.json(movie)
        } catch (error) {
          response.json(400)
        }

      }


      async insertMovie(request:Request, response:Response){
        try {
          const {title, year,time, nameTitle}= request.body

          let movie = await prisma.movie.findUnique({where:{title}})

          if(movie){
            return response.json({error:"Título do filme já cadastrado"})
          }

          movie = await prisma.movie.create({
              data:{
                  title,
                  year,
                  time,
                  categorie:{connect:{name:nameTitle}}
              }
          })
          response.json(movie)
        } catch (error) {
          response.json(400)
        }
      }


      async updateMovie(requeste:Request, response:Response){
        try {
        const {id} =requeste.params
        const {title, year,time, nameTitle}= requeste.body

        let movie = await prisma.movie.findUnique({where:{Id:Number(id)}})

        if(!movie){
          return response.json({error:"Filme não encontrado ou não existe"})
        }


         movie = await prisma.movie.update({
            where:{Id:Number(id)},
            data:{
                title,
                year,
                time,
                categorie:{connect:{name:nameTitle}}
            }
        })
        response.json(movie)
        } catch (error) {
          response.json(400)
        }
        
      }

      async deleteMovie(requeste:Request, response:Response) {
        try {
          const {id} = requeste.params
          const movie= await prisma.movie.findUnique({where:{Id:Number(id)}})

           if(!movie){
            return response.json({ error: "Filme não encontrado ou não existe" });
           }

          await prisma.movie.delete({ where:{Id:Number(id)}})
        } catch (error) {
           response.json(400)
        }
            
      }

}



