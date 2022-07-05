import { left, right, Either } from './../shared/either';
import { InvalidGenreError } from './errors/invalide-genre-error';
import { SessionData } from './session-data';
import { Genre } from './genre';
import { Title } from './title';
import { InvalideTitleError } from './errors/invalide-movie-error';

export class Session{
    public readonly title:Title
    public readonly genre:Genre

     constructor(title:Title,genre:Genre){
        this.title=title
        this.genre=genre
    }

    public static create(sessionData:SessionData):Either<InvalideTitleError|InvalidGenreError,Session>{
        const titleOrError= Title.create(sessionData.title)
        if(titleOrError.isLeft()){
            return left(new InvalideTitleError(sessionData.title))
        }

        const genreOrError= Genre.create(sessionData.genre)
        if(genreOrError.isLeft()){
            return left(new InvalidGenreError(sessionData.genre))
        }

        const movie:Title = titleOrError.value as Title
        const genre:Genre = titleOrError.value as Genre

        return right(new Session(movie,genre))
    }
}