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
        const movie = await prisma.movie.findMany()
        response.json(movie)
      }

      async findOne(request:Request, response:Response){
        const {id} = request.params
        const movie = await prisma.movie.findFirst({
            where:{Id:Number(id)},include:{categorie:true}
        })
        response.json(movie)
      }

      async insertMovie(request:Request, response:Response){
        const {title, year,time, nameTitle}= request.body
        const movie = await prisma.movie.create({
            data:{
                title,
                year,
                time,
                categorie:{connect:{name:nameTitle}}
            }
        })
        response.json(movie)
      }
      async updateMovie(requeste:Request, response:Response){
        const {id} =requeste.params
        const {title, year,time, nameTitle}= requeste.body
        const movie = await prisma.movie.update({
            where:{Id:Number(id)},
            data:{
                title,
                year,
                time,
                categorie:{connect:{name:nameTitle}}
            }
        })
        response.json(movie)
      }

}

 //Atualizando um Filme
 app.put('/movie/:id', async (req, res) => {
    const { id } = req.params
    const {title,year,time, nameTitle} = req.body
    const movie = await prisma.movie.update({
      where: { Id: Number(id) },
      data: {
        title,
        year,
        time,
        categorie:{connect:{name:nameTitle}}
       },
    })
    res.json(movie)
  })


//Removendo um filme
app.delete(`/movie/:id`, async(req,res)=>{
    const {id} = req.params
    const movie = await prisma.movie.delete({
        where:({Id:Number(id)})
    })
    res.json(movie)
})


