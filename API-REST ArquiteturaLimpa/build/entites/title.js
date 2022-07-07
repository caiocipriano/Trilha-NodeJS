"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var either_1 = require("../shared/either");
var invalide_movie_error_1 = require("./errors/invalide-movie-error");
var Title = /** @class */ (function () {
    function Title(movie) {
        this.value = movie;
    }
    Title.create = function (movie) {
        if (!Title.validation(movie)) {
            return (0, either_1.left)(new invalide_movie_error_1.InvalideTitleError(movie));
        }
        return (0, either_1.right)(new Title(movie));
    };
    Title.validation = function (movie) {
        if (!movie) {
            return false;
        }
        return true;
    };
    return Title;
}());
exports.Title = Title;
