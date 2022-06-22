import { UserData } from './../user-data';

export interface UserRepository{
    add(user:UserData):Promise<void>
    findUserByEmail(email:string):Promise<UserData>
    findAllUser():Promise<UserData[]>
    exist(user:UserData):Promise<boolean>
}