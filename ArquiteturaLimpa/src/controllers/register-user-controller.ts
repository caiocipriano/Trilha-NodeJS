import { UseCase } from '@/usercases/ports/';
import { MissingParamError } from '@/controllers/errors/missing-param-error';
import { HttpRequest,HttpResponse } from '@/controllers/ports';
import { UserData } from '@/entites';
import { badRequest, created, serverError } from './util/http-helper';

export class RegisterUserController{
    private readonly usercase:UseCase

    constructor(usercase:UseCase){
        this.usercase=usercase
    }

    public async handle(request:HttpRequest):Promise<HttpResponse>{
        try {
            if(!(request.body.name)|| !(request.body.email)){
                return badRequest (new MissingParamError('Some empty field'))
            }
            const userData:UserData=request.body
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