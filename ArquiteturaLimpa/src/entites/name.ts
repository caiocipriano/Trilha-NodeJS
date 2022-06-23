import { InvalidNameError } from './errors/invalid-name-error';
import { left, Either, right } from './../shared/either';

export class Name{
    public readonly value:string

    private constructor(name:string){
        this.value=name
    }

    public static create(name:string){
        if(!Name.validate(name)){//Se email for valido, cria
            return left(new InvalidNameError())
        }
        return right(new Name(name))
    }


    public static validate(name:string|null):boolean{//Retirar futuramente
        if(!name){
            return false
        }
        
        if(name.trim().length<2 ||name.trim().length>256  ){
            return false
        }
        return true
    }

}