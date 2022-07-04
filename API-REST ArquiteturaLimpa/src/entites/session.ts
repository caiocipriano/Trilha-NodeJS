import { left, right, Either } from './../shared/either';
import { InvalidGenreError } from './errors/invalide-genre-error';
import { SessionData } from './session-data';
import { Genre } from './genre';
import { Title } from './movie';
import { InvalideMovieError } from './errors/invalide-movie-error';

export class Session{
    public readonly title:Title
    public readonly genre:Genre

     constructor(title:Title,genre:Genre){
        this.title=title
        this.genre=genre
    }

    public static create(sessionData:SessionData):Either<InvalideMovieError|InvalidGenreError,Session>{
        const movieOrError= Title.create(sessionData.title)
        if(movieOrError.isLeft()){
            return left(new InvalideMovieError(sessionData.title))
        }

        const genreOrError= Genre.create(sessionData.genre)
        if(genreOrError.isLeft()){
            return left(new InvalidGenreError(sessionData.genre))
        }

        const movie:Title = movieOrError.value as Title
        const genre:Genre = movieOrError.value as Genre

        return right(new Session(movie,genre))
    }
}