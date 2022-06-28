export class MailServiceError extends Error{
    constructor(){
        super('Mail service Error')
        this.name="Mail Service Error"
    }
}