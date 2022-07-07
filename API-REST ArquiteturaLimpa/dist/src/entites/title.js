"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const either_1 = require("../shared/either");
const invalide_movie_error_1 = require("./errors/invalide-movie-error");
class Title {
    constructor(movie) {
        this.value = movie;
    }
    static create(movie) {
        if (!Title.validation(movie)) {
            return (0, either_1.left)(new invalide_movie_error_1.InvalideTitleError(movie));
        }
        return (0, either_1.right)(new Title(movie));
    }
    static validation(movie) {
        if (!movie) {
            return false;
        }
        return true;
    }
}
exports.Title = Title;
