export class Email{
    static validate(email:string|null):boolean{//Retirar futuramente
        if(!email){
            return false
        }
        
        if(email.length>120){
            return false
        }
        
        const [local] = email.split('@')
        if(local.length>64){
            return false
        }



        return true

    }
}