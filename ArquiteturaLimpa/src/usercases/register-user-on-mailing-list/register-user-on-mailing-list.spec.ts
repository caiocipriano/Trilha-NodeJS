import { UserData } from '../../entites/user-data';
import { UserRepository } from './ports/user-repository';
import { RegisterUserOnMailingList } from './registe-user-on-mailing-list';
import { InMemoryUserRepository } from './repository/in-memory-user-repository';

describe('',()=>{
    test('deve resigistrar usuario na lista de emails', async()=>{
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const name='any_name'
        const email = '@email.com'
        const response = await usercase.registerUserOnMailingList({name,email})
        const user = repo.findUserByEmail('@email.com')
        expect((await user).name).toBe('any_name')
        expect(response.value).toBe('any_name')
    })
    test(' não deve resigistrar com email invalido', async()=>{
        const users: UserData[]=[]
        const repo:UserRepository = new InMemoryUserRepository(users)
        const usercase:RegisterUserOnMailingList=new RegisterUserOnMailingList(repo)
        const name='any_name'
        const email = '@email.com'
        const response = await usercase.registerUserOnMailingList({name,email})
        const user = repo.findUserByEmail('@email.com')
        expect((await user).name).toBe('any_name')
        expect(response.value).toBe('any_name')
    })
})