import { left, right, Either } from './../shared/either';
import { InvalidGenreError } from './errors/invalide-genre-error';
import { SessionData } from './session-data';
import { Genre } from './genre';
import { Movie } from './movie';
import { InvalideMovieError } from './errors/invalide-movie-error';
export class Session{
    public readonly movie:Movie
    public readonly genre:Genre

    private constructor(movie:Movie,genre:Genre){
        this.movie=movie
        this.genre=genre
    }

    static create(sessionData:SessionData):Either<InvalideMovieError|InvalidGenreError,Session>{
        const movieOrError= Movie.create(sessionData.title)
        if(movieOrError.isLeft()){
            return left(new InvalideMovieError(sessionData.title))
        }

        const genreOrError= Genre.create(sessionData.genre)
        if(genreOrError.isLeft()){
            return left(new InvalidGenreError(sessionData.genre))
        }

        const movie:Movie = movieOrError.value as Movie
        const genre:Genre = movieOrError.value as Genre

        return right(new Session(movie,genre))
    }
}