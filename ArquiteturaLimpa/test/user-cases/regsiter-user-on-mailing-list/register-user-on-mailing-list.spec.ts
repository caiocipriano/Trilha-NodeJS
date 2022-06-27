import { UserData } from '@/entites';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';
import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list';
import { InMemoryUserRepository } from './repository';

describe('',()=>{
    test('deve resigistrar usuario na lista de emails', async()=>{
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const name='any_name'
        const email = '@email.com'
        const response = await usercase.perform({name,email})
        const user = repo.findUserByEmail('@email.com')
        expect((await user).name).toBe('any_name')
        expect(response.value).toBe('any_name')
    })  
    test('não deve resigistrar com email invalido', async()=>{
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const name='any_name'
        const invalidEmail = 'ivalid_email'
        const response = (await usercase.perform(
            { name: name, email: invalidEmail })).value as Error
        const user = await repo.findUserByEmail(invalidEmail)
        expect(user).toBeNull()
        expect(response.name).toEqual('InvalidEmailError')
    })
    test('não deve resigistrar com nome invalido', async()=>{
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const name=''
        const email = 'any@email.com'
        const response = (await usercase.perform({name,email})).value as Error
        const user = repo.findUserByEmail(email)
        expect(await user).toBeNull()
        expect(response).toEqual("InvalidNameError")
    })
})