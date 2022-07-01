import { UserData } from '@/entites';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';


export class InMemoryUserRepository implements UserRepository{
    private repository:UserData[]
    constructor(repository:UserData[]){
        this.repository=repository
    }
    async add (user: UserData): Promise<void> {
       const exists = await this.exist(user)
       if(!exists){
        this.repository.push(user)
       }
    }
    async findUserByEmail (email: string): Promise<UserData |undefined> {
        const found = this.repository.find(user=>user.email === email)
        return found || undefined
    }
    async findAllUser (): Promise<UserData[]> {
        return this.repository
    }
    async exist (user: UserData): Promise<boolean> {
       if(await this.findUserByEmail(user.email) === null){
        return false
       }
       return true
    }
}