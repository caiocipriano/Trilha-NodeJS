"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidGenreError = void 0;
class InvalidGenreError extends Error {
    constructor(genre) {
        super("Invalid Genre");
        this.value = "InvalidGenreError";
    }
}
exports.InvalidGenreError = InvalidGenreError;
