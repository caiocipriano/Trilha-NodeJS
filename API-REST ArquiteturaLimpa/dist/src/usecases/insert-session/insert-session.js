"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertSession = void 0;
class InsertSession {
    constructor(sessionRepo) {
        this.sessionRepo = sessionRepo;
    }
    async perform(request) {
        const title = request.title.value;
        const genre = request.genre.value;
        const sessionData = { title, genre };
        if (!(await this.sessionRepo.exist(sessionData))) {
            await this.sessionRepo.create(sessionData);
        }
        return sessionData;
    }
}
exports.InsertSession = InsertSession;
