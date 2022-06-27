import { HttpRequest } from '@/controllers/ports';
import { HttpResponse } from '@/controllers/ports/http-response';
import { RegisterUserController } from '@/controllers/register-user-controller';
import { UserData } from '@/entites';
import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';
import { InMemoryUserRepository } from 'test/user-cases/regsiter-user-on-mailing-list/repository';

describe('',()=>{
    test('deve retornar status 201 para requisição de user valido', async()=>{
        const request:HttpRequest={
            body:{
                name:"AnyName",
                email:"any@email.com"
            }
        }
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const controller:RegisterUserController = new RegisterUserController(usercase)
        const response:HttpResponse= await controller.handle(request)
        expect(response.statusCode).toBe(201)
        expect(response.body).toEqual(request.body)
    })
})