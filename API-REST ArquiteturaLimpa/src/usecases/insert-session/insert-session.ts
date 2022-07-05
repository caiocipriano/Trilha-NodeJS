import { SessionRepository } from './ports/session-repository';
import { SessionData } from '../../entites/session-data';
import { Session } from '../../entites/session';
import { UseCase } from '../ports/use-case';

export class InsertSession implements UseCase{
    private readonly sessionRepo:SessionRepository
    constructor(sessionRepo:SessionRepository){
        this.sessionRepo=sessionRepo
    }
    public async perform(request:Session):Promise<SessionData>{
        const title= request.title.value
        const genre = request.genre.value
        const sessionData = {title,genre}
        if (!(await this.sessionRepo.exist(sessionData))) {
            await this.sessionRepo.create(sessionData)
          }
        return sessionData
    }
}