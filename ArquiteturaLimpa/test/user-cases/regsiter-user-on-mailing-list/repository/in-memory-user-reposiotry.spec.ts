import { InMemoryUserRepository } from './in-memory-user-repository';
import { UserData } from '../../../../src/entites/user-data';

describe('In memory User Repository',()=>{
    test('deve retornar nulo se usuario não existir', async()=>{
        const users:UserData[]=[]
        const sut = new InMemoryUserRepository(users)
        const user = await sut.findUserByEmail('any@email.com')
        expect(user).toBeNull()

    })
    test('deve retorna usuario pelo email encontrada no repository', async()=>{
        const users:UserData[]=[]
        const name= "any_name"
        const email="any@wmail.com"
        const sut= new InMemoryUserRepository(users)
        const user = await sut.findUserByEmail(email)
        await sut.add({name,email})
        expect(user.name).toBe('any_name')
    })
    test('deve retornar todos usuario do repository', async ()=>{
        const users:UserData[]=[{name:'any_name',email:'any@email.com'},
        {name:'second_name',email:'second@email.com'}]
        const sut= new InMemoryUserRepository(users)
        const returnedUsers = sut.findAllUser()
        expect((await returnedUsers).length).toBe(2)
    })
})