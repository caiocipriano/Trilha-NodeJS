import { Session } from './../../../src/entites/session';
import { SessionData } from "../../../src/entites/session-data"
import { InsertSession } from "../../../src/usecases/insert-user/insert-session"
import { SessionRepository } from "../../../src/usecases/insert-user/ports/session-repository"
import { InMemorySessionRepository } from "../../../src/usecases/insert-user/repository/in-memory-session-repository"

describe('',()=>{
    test('should add user with complete data to mailing list', async () => {
        const sessions: SessionData[] = []
        const repo: SessionRepository = new InMemorySessionRepository(sessions)
        const usecase: InsertSession = new InsertSession(repo)
        const title = 'Avatar'
        const genre = 'Aventura'
        const session = Session.create({ title: title, genre: genre }).value as Session
        const response = await usecase.perform(session)
        expect(response.title).toBe('Avatar')
        expect(response.genre).toBe('Aventura')
      })
})