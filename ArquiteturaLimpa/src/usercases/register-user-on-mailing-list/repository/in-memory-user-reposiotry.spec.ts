import { InMemoryUserRepository } from './in-memory-user-repository';
import { UserData } from './../user-data';

describe('In memory User Repository',()=>{
    test('deve retornar nulo se usuario não existir', async()=>{
        const users:UserData[]=[]
        const userRepo = new InMemoryUserRepository(users)
        const user = await userRepo.findUserByEmail('any@email.com')
        expect(user).toBeNull()

    })
    test('deve retorna usuario encontrada no repository', async()=>{
        const users:UserData[]=[]
        const name= "any_name"
        const email="any@wmail.com"
        const userRepo= new InMemoryUserRepository(users)
        const user = await userRepo.findUserByEmail(email)
        await userRepo.add({name,email})
        expect(user.name).toBe('any_name')
    })
})