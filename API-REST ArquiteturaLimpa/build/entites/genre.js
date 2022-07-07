"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
var either_1 = require("../shared/either");
var invalide_genre_error_1 = require("./errors/invalide-genre-error");
var Genre = /** @class */ (function () {
    function Genre(genre) {
        this.value = genre;
    }
    Genre.create = function (genre) {
        if (!Genre.validate(genre)) {
            return (0, either_1.left)(new invalide_genre_error_1.InvalidGenreError(genre));
        }
        return (0, either_1.right)(new Genre(genre));
    };
    Genre.validate = function (genre) {
        if (!genre) {
            return false;
        }
        return true;
    };
    return Genre;
}());
exports.Genre = Genre;
