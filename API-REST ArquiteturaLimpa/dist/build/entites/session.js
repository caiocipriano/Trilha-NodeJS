"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
var either_1 = require("./../shared/either");
var invalide_genre_error_1 = require("./errors/invalide-genre-error");
var genre_1 = require("./genre");
var title_1 = require("./title");
var invalide_movie_error_1 = require("./errors/invalide-movie-error");
var Session = /** @class */ (function () {
    function Session(title, genre) {
        this.title = title;
        this.genre = genre;
    }
    Session.create = function (sessionData) {
        var titleOrError = title_1.Title.create(sessionData.title);
        if (titleOrError.isLeft()) {
            return (0, either_1.left)(new invalide_movie_error_1.InvalideTitleError(sessionData.title));
        }
        var genreOrError = genre_1.Genre.create(sessionData.genre);
        if (genreOrError.isLeft()) {
            return (0, either_1.left)(new invalide_genre_error_1.InvalidGenreError(sessionData.genre));
        }
        var movie = titleOrError.value;
        var genre = titleOrError.value;
        return (0, either_1.right)(new Session(movie, genre));
    };
    return Session;
}());
exports.Session = Session;
