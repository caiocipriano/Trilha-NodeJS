import { SessionData } from '../../../entites/session-data';
import { SessionRepository } from '../ports/session-repository';


export class InMemorySessionRepository implements SessionRepository{
    private repository: SessionData[]
    constructor(repository:SessionData[]){
        this.repository=repository
    }
    async create(session: SessionData): Promise<void> {
        const exists= await this.exist(session);
        if(exists){
            this.repository.push(session)
        }
    }
    async findByMovieName(movie: string): Promise<SessionData|undefined> {
        const found = this.repository.find(session=>session.title === movie)
        return found || undefined
    }
    findAllSession(): Promise<SessionData[]> {
        throw new Error('Method not implemented.');
    }
    exist(session: SessionData): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}