import { Session } from './../../../src/entites/session';
import { SessionData } from "../../../src/entites/session-data"
import { InsertSession } from "../../../src/usecases/insert-session/insert-session"
import { SessionRepository } from "../../../src/usecases/insert-session/ports/session-repository"
import { InMemorySessionRepository } from "../../../src/usecases/insert-session/repository/in-memory-session-repository"

describe('',()=>{
    test('Deve criar uma sessão', async () => {
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