"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("./../../../src/entites/session");
const insert_session_1 = require("../../../src/usecases/insert-session/insert-session");
const in_memory_session_repository_1 = require("../../../src/usecases/insert-session/repository/in-memory-session-repository");
describe('', () => {
    test('Deve criar uma sessão', async () => {
        const sessions = [];
        const repo = new in_memory_session_repository_1.InMemorySessionRepository(sessions);
        const usecase = new insert_session_1.InsertSession(repo);
        const title = 'Avatar';
        const genre = 'Aventura';
        const session = session_1.Session.create({ title: title, genre: genre }).value;
        const response = await usecase.perform(session);
        expect(response.title).toBe('Avatar');
        expect(response.genre).toBe('Aventura');
    });
});
