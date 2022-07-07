"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const either_1 = require("./../shared/either");
const invalide_genre_error_1 = require("./errors/invalide-genre-error");
const genre_1 = require("./genre");
const title_1 = require("./title");
const invalide_movie_error_1 = require("./errors/invalide-movie-error");
class Session {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }
    static create(sessionData) {
        const titleOrError = title_1.Title.create(sessionData.title);
        if (titleOrError.isLeft()) {
            return (0, either_1.left)(new invalide_movie_error_1.InvalideTitleError(sessionData.title));
        }
        const genreOrError = genre_1.Genre.create(sessionData.genre);
        if (genreOrError.isLeft()) {
            return (0, either_1.left)(new invalide_genre_error_1.InvalidGenreError(sessionData.genre));
        }
        const movie = titleOrError.value;
        const genre = titleOrError.value;
        return (0, either_1.right)(new Session(movie, genre));
    }
}
exports.Session = Session;
