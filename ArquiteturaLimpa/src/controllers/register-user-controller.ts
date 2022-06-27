import { HttpRequest,HttpResponse } from '@/controllers/ports';
import { UserData } from '@/entites';
import { RegisterUserOnMailingList } from "@/usercases/register-user-on-mailing-list"
import { badRequest, created } from './util/http-helper';

export class RegisterUserController{
    private readonly usercase:RegisterUserOnMailingList

    constructor(usercase:RegisterUserOnMailingList){
        this.usercase=usercase
    }

    public async handle(request:HttpRequest):Promise<HttpResponse>{
        const userData:UserData=request.body
        const response = await this.usercase.registerUserOnMailingList(userData)

        if(response.isLeft()){
            return badRequest(response.value)
        }
        if(response.isRight()){
           return created(response)
        }
    }
}