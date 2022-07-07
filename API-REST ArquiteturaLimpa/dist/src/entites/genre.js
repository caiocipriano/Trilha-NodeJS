"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
const either_1 = require("../shared/either");
const invalide_genre_error_1 = require("./errors/invalide-genre-error");
class Genre {
    constructor(genre) {
        this.value = genre;
    }
    static create(genre) {
        if (!Genre.validate(genre)) {
            return (0, either_1.left)(new invalide_genre_error_1.InvalidGenreError(genre));
        }
        return (0, either_1.right)(new Genre(genre));
    }
    static validate(genre) {
        if (!genre) {
            return false;
        }
        return true;
    }
}
exports.Genre = Genre;
