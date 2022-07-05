import { SessionData } from './../entites/session-data';
import { UseCase } from "../usecases/ports/use-case"
import { HttpRequest, HttpResponse } from './ports';
import { MissingParamError } from './errors/missing-param-error';
import { badRequest, created, serverError } from './util/http-helper';

export class SessionController{
    private readonly usercase:UseCase

    constructor(usercase:UseCase){
        this.usercase=usercase
    }

    public async handle(request:HttpRequest):Promise<HttpResponse>{
        try {
            if(!(request.body.name)|| !(request.body.email)){
                return badRequest (new MissingParamError('Some empty field'))
            }
            const userData:SessionData=request.body
            const response = await this.usercase.perform(userData)
    
            if(response.isLeft()){
                return badRequest(response.value)
            }
            return created(response)
            
        } catch (error) {
            return serverError(error)
        }
    }
}