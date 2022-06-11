import { Request, Response } from 'express';

import { CategorieService } from './../service/CategorieService';

    
export class CategorieController{
    async findAll(requeste:Request, response:Response){
        const categorie = new CategorieService()
        categorie.findAll(requeste,response)
    }

    async findOne(request:Request, response:Response){
        const categorie = new CategorieService()
        categorie.findOne(request,response)
    }
    async insertCategorie(request:Request, response:Response){
        const categorie = new CategorieService()
        categorie.insertCategorie(request,response)
    }

    async updateCategorie(request:Request, response:Response){
        const categorie = new CategorieService()
        categorie.updateCategorie(request,response)
    }

    async deleteCategorie(request:Request, response:Response){
        const categorie = new CategorieService()
        categorie.deleteCategorie(request,response)
    }
}