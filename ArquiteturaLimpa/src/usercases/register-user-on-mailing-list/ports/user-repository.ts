import { UserData } from '@/entites';

export interface UserRepository{
    add(user:UserData):Promise<void>
    findUserByEmail(email:string):Promise<UserData |undefined>
    findAllUser():Promise<UserData[]>
    exist(user:UserData):Promise<boolean>
}