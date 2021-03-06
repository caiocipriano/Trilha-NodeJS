import { InvalidEmailError } from '@/entites/errors';
import { right, left } from '@/shared';
export class Email{
    public readonly value:string

    private constructor(email:string){
        this.value=email
    }

    static create(email:string){
        if(Email.create(email)){//Se email for valido, cria
            return right(new Email(email))
        }
        return left(new InvalidEmailError(email))
    }


    static validate(email:string|null):boolean{//Retirar futuramente
        if(!email){
            return false
        }
        
        if(email.length>120){
            return false
        }

        const [local,domain] = email.split('@')
        if(local.length>64){
            return false
        }
        if(domain.length>255){
            return false
        }
        return true

    }
}