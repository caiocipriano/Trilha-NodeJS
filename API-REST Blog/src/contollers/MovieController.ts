import { Express, Request, Response } from 'express';
    
import { MovieService } from './../service/MovieService';


export class MovieController{

    async findAll(requeste:Request, response:Response){
        const movie = new MovieService()
        movie.findAll(requeste,response)
        
    }
    async findOne (requeste:Request, response:Response)  {
        const movie = new MovieService()
        movie.findOne(requeste,response)
      }

     async insertMovie(requeste:Request, response:Response){
        const movie = new MovieService()
        movie.insertMovie(requeste,response)
     }

     async updateMovie(requeste:Request, response:Response){
        const movie = new MovieService()
        movie.updateMovie(requeste,response)
     }
}