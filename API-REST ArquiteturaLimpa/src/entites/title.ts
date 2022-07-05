import { left, right } from '../shared/either';
import { InvalideTitleError } from "./errors/invalide-movie-error";

export class Title{
    public readonly value:string;

    constructor(movie:string){
        this.value=movie
    }

    public static create(movie:string){
        if(!Title.validation(movie)){
            return left(new InvalideTitleError(movie))
        }
        return right(new Title(movie))
    }

    public static validation(movie:string|null):boolean{ //Nulo para validação no test
        if(!movie){
            return false
        }
        return true
    }
}