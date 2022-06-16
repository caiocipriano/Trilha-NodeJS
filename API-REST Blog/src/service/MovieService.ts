import { Movie, PrismaClient } from '@prisma/client'
import express, { Request, Response }  from 'express'

import { AppError } from './../error/appError';
import RedisCache from "../lib/RedisCache"

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

//Filmes
//Listando todos os Filmes e a categoria é exibida com o id
export class MovieService{
      async findAll (request:Request, response:Response) {
        try {
          const redisCache= new RedisCache()

          let movies = await redisCache.recover<Movie[]>('api-blog-MOVIES_LIST')

          if(!movies){
             movies = await prisma.movie.findMany()

            await redisCache.save('api-blog-MOVIES_LIST',movies)
          }
          response.json(movies)
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
      }

      async findOne(request:Request, response:Response){
        try {
          const {id} = request.params
          const redisCache= new RedisCache()
          const movie = await prisma.movie.findFirst({
              where:{Id:Number(id)},include:{categorie:true}
          })

          if(!movie){
            response.json("Filme não encontrado ou não existe")
          }

          await redisCache.save('api-blog-MOVIES_LIST',movie)

          response.json(movie)
        } catch (error) {
          throw new AppError("Erro na requisição")
        }
      }


      async insertMovie(request:Request, response:Response){
        try {
          const {title, year,time, nameTitle}= request.body

          let movie = await prisma.movie.findUnique({where:{title}})

          if(movie){
            response.json("Filme já cadastrado")
          }

          const redisCache= new RedisCache()
          await redisCache.invalidate('api-blog-MOVIES_LIST')

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
          throw new AppError("Erro na requisição")
        }
      }


      async updateMovie(requeste:Request, response:Response){
        try {
        const {id} =requeste.params
        const {title, year,time, nameTitle}= requeste.body

        let movie = await prisma.movie.findUnique({where:{Id:Number(id)}})

        if(!movie){
          response.json("Filme não encontrado ou não existe")
        }
        const redisCache= new RedisCache()
        await redisCache.invalidate('api-blog-MOVIES_LIST')

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
          throw new AppError("Erro na requisição")
        }
        
      }

      async deleteMovie(requeste:Request, response:Response) {
        try {
          const {id} = requeste.params
          const movie= await prisma.movie.findUnique({where:{Id:Number(id)}})

           if(!movie){
            response.json("Filme não encontrado ou não existe")
           }    
          const redisCache= new RedisCache()
           await redisCache.invalidate('api-blog-MOVIES_LIST')
 

          await prisma.movie.delete({ where:{Id:Number(id)}})
        } catch (error) {
           throw new AppError("Erro na requisição")
        } 
      }
}



