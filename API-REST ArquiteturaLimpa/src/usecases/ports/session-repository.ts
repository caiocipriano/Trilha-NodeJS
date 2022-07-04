import { SessionData } from './../../entites/session-data';
//Classe com prisma
export interface SessionRepository{
    create(session:SessionData):Promise<void>
    findByMovieName(movie:string):Promise<SessionData>
    findAllSession():Promise<SessionData[]>
    exist(session:SessionData):Promise<boolean>
}