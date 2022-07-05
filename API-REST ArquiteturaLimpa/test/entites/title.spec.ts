import { SessionData } from "../../src/entites/session-data"
import { InMemorySessionRepository } from "../../src/usecases/insert-session/repository/in-memory-session-repository"

describe('Validação dos dados',()=>{
    test('deve retorna sessão pelo titulo encontrado no repository', async()=>{
        const sessions:SessionData[]=[]
        const title= "TopGun"
        const genre="Ação"
        const sut= new InMemorySessionRepository(sessions)
        const session = await sut.findByMovieName(title)
        await sut.create({title,genre})
        expect(session?.title).toBe('TopGun')
    })
    test('deve retornar todas sessões do repository', async ()=>{
        const sessions:SessionData[]=[{title:'TopGun',genre:'Ação'},
        {title:'Sonic',genre:'Animação'}]
        const sut= new InMemorySessionRepository(sessions)
        const returnedSessions= sut.findAllSession()
        expect((await returnedSessions).length).toBe(2)
    })
})