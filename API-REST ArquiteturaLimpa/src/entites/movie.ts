import { left, right } from './../shared/either';
import { InvalideMovieError } from "./errors/invalide-movie-error";

export class Title{
    public readonly value:string;

    constructor(movie:string){
        this.value=movie
    }

    public static create(movie:string){
        if(!Title.validation(movie)){
            return left(new InvalideMovieError(movie))
        }
        return right(new Title(movie))
    }

    public static validation(movie:string):boolean{
        if(!movie){
            return false
        }
        return true
    }
}