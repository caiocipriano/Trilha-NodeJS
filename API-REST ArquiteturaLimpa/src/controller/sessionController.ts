import { SessionData } from './../entites/session-data';
import { UseCase } from "../usecases/ports/use-case"
import { HttpRequest, HttpResponse } from './ports';
import { MissingParamError } from './errors/missing-param-error';
import { badRequest, created, serverError } from './util/http-helper';

export class SessionController{
    private readonly usecase:UseCase

    constructor(usercase:UseCase){
        this.usecase=usercase
    }

    public async handle(request:HttpRequest):Promise<HttpResponse>{
        try {
            if(!(request.body.title)||!(request.body.genre)){
                return badRequest (new MissingParamError('Some empty field'))
            }
            const sessionData:SessionData=request.body
            const response = await this.usecase.perform(sessionData)
    
            if(!response){
                return badRequest(response.value)
            }
            return created(response)
            
        } catch (error) {
            return serverError(error)
        }
    }
}