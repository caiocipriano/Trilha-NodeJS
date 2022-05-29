

function pessoa(nome,idade,rg){
   return{ nome,
    idade,
    rg,
    recrutar(){
        console.log("Aprovado!")
    }
 }
}

const pessoa1= pessoa("Caio", 19, 10426)

console.log(pessoa1)
