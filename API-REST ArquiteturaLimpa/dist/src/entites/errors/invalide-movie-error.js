"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalideTitleError = void 0;
class InvalideTitleError extends Error {
    constructor(movie) {
        super(movie = "Invalide Title");
        this.value = "InvalidTitleError";
    }
}
exports.InvalideTitleError = InvalideTitleError;
