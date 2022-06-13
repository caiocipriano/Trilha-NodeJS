import { Express, Request, Response } from 'express';


import { UserService } from '../service/UserService';

export class UserController{
    async findAll(requeste:Request, response:Response){
        const user = new UserService()
        user.findAll(requeste,response)
        
    }
    async findOne (requeste:Request, response:Response)  {
        const user = new UserService()
        user.findOne(requeste,response)
      }

     async insertUser(requeste:Request, response:Response){
        const user = new UserService()
        user.insertUser(requeste,response)
     }

     async updateUser(requeste:Request, response:Response){
        const user = new UserService()
        user.updateUser(requeste,response)
     }

     async deleteUser(requeste:Request, response:Response){
        const user = new UserService()
        user.deleteUser(requeste,response)
     }
}