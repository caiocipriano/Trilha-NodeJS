"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySessionRepository = void 0;
class InMemorySessionRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async create(session) {
        const exists = await this.exist(session);
        if (exists) {
            this.repository.push(session);
        }
    }
    async findByMovieName(movie) {
        const found = this.repository.find(session => session.title === movie);
        return found || undefined;
    }
    findAllSession() {
        throw new Error('Method not implemented.');
    }
    exist(session) {
        throw new Error('Method not implemented.');
    }
}
exports.InMemorySessionRepository = InMemorySessionRepository;
