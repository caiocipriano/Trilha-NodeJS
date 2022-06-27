import { MissingParamError } from '@/controllers/errors/missing-param-error';
import { HttpRequest,HttpResponse } from '@/controllers/ports';
import { RegisterUserController } from '@/controllers/register-user-controller';
import { UserData } from '@/entites';
import { InvalidEmailError, InvalidNameError } from '@/entites/errors';
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

    test('deve retornar status 400 para requisição de nome valido', async()=>{
        const requestWithInvalidName:HttpRequest={
            body:{
                name:"A",
                email:"any@email.com"
            }
        }
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const controller:RegisterUserController = new RegisterUserController(usercase)
        const response:HttpResponse= await controller.handle(requestWithInvalidName)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(InvalidNameError)
    })

    test('deve retornar status 400 para requisição de email valido', async()=>{
        const requestWithInvalidEmail:HttpRequest={
            body:{
                name:"Any Name",
                email:""
            }
        }
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const controller:RegisterUserController = new RegisterUserController(usercase)
        const response:HttpResponse= await controller.handle(requestWithInvalidEmail)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(InvalidEmailError)
    })

    test('deve retornar status 400 para requisição faltando name', async()=>{
        const requestWithInvalidName:HttpRequest={
            body:{
                email:"any@email.com"
            }
        }
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const controller:RegisterUserController = new RegisterUserController(usercase)
        const response:HttpResponse= await controller.handle(requestWithInvalidName)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(MissingParamError)
        expect((response.body as Error).message).toEqual("Missing Name in Request")
    })
})