import { left, right } from "../shared/either"
import { InvalidGenreError } from "./errors/invalide-genre-error"

export class Genre{
    public readonly value:string

    constructor(genre:string) {
        this.value=genre
    }

    public static create(genre:string){
        if(!Genre.validate(genre)){
            return left(new InvalidGenreError(genre))
        }
        return right(new Genre(genre))
        
    }

    public static validate(genre:string):boolean{
        if(!genre){
            return false
        }
        return true
    }
}