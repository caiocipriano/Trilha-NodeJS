export class InvalideTitleError extends Error{
    private readonly value="InvalidTitleError"
    constructor(movie:string){
        super(movie="Invalide Title")
    }
}