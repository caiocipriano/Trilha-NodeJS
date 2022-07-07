"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const in_memory_session_repository_1 = require("../../src/usecases/insert-session/repository/in-memory-session-repository");
describe('Validação dos dados', () => {
    test('deve retorna sessão pelo titulo encontrado no repository', async () => {
        const sessions = [];
        const title = "TopGun";
        const genre = "Ação";
        const sut = new in_memory_session_repository_1.InMemorySessionRepository(sessions);
        const session = await sut.findByMovieName(title);
        await sut.create({ title, genre });
        expect(session === null || session === void 0 ? void 0 : session.title).toBe('TopGun');
    });
    test('deve retornar todas sessões do repository', async () => {
        const sessions = [{ title: 'TopGun', genre: 'Ação' },
            { title: 'Sonic', genre: 'Animação' }];
        const sut = new in_memory_session_repository_1.InMemorySessionRepository(sessions);
        const returnedSessions = sut.findAllSession();
        expect((await returnedSessions).length).toBe(2);
    });
});
