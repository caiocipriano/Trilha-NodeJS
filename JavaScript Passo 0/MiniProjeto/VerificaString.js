const pessoa = {
    Nome:'Caio',
    Idade:19,
    Hobby:'programar'
}
function verificaString(obj){   
   for(let key in obj){
        if(typeof obj[key] == 'string'){
            console.log(key, obj[key])
        }
    }
}

verificaString(pessoa)