import { left, right } from './../shared/either';
import { InvalideMovieError } from "./errors/invalide-movie-error";

export class Movie{
    public readonly value:string;

    constructor(movie:string){
        this.value=movie
    }

    public static create(movie:string){
        if(!Movie.validation(movie)){
            return left(new InvalideMovieError(movie))
        }
        return right(new Movie(movie))
    }

    public static validation(movie:string):boolean{
        if(!movie){
            return false
        }
        return true
    }
}