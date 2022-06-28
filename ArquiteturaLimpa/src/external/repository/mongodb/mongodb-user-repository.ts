import { UserData } from '@/entites';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';
import { MongoHelper } from './helper/mongo-helper';

export class MongodbUserRepository implements UserRepository{
    async add(user: UserData): Promise<void> {
        const userCollection = MongoHelper.getCollection('users')
        const exist = await this.exist(user)
        if(!exist){
            await userCollection.insertOne(user)
        }
    }
    async findUserByEmail(email: string): Promise<UserData> {
        const userCollection = MongoHelper.getCollection('users')
        const result = await userCollection.findOne({email:email})
        return result
    }
    async findAllUser(): Promise<UserData[]> {
        return await MongoHelper.getCollection('users').find().toArray()
    }
    async exist(user: UserData): Promise<boolean> {
        const result = await this.findUserByEmail(user.email)
        if(result !=null){
           return true
        }
        return false
    }
    
}