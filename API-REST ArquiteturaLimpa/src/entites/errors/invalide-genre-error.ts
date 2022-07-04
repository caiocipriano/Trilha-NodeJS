export class InvalidGenreError extends Error{
    private readonly value="InvalidGenreError"
    constructor(genre:string){
        super("Invalid Genre")
    }
}