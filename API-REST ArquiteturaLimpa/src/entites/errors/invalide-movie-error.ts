export class InvalideMovieError extends Error{
    private readonly value="InvalidMovieError"
    constructor(movie:string){
        super(movie="Invalide Movie")
    }
}