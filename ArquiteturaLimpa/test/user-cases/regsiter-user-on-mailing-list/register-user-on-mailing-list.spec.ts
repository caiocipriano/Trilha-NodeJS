import { User, UserData } from '@/entites';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';
import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list';
import { InMemoryUserRepository } from './repository';

describe('',()=>{
    test('should add user with complete data to mailing list', async () => {
        const users: UserData[] = []
        const repo: UserRepository = new InMemoryUserRepository(users)
        const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
        const name = 'any_name'
        const email = 'any@email.com'
        const user = User.create({ name, email }).value as User
        const response = await usecase.perform(user)
        const addedUser = repo.findUserByEmail('any@email.com')
        expect((await addedUser).name).toBe('any_name')
        expect(response.name).toBe('any_name')
      })
})