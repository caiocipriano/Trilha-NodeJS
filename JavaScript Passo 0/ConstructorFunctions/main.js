/*function pessoa(nome,idade,rg){
    return{
        nome,
        idade,
        rg,
        recrutar(){
            console.log("Aprovado!")
        }
    }
 }*/
 
//Pascal Case UmDoisTres
function Pessoa(nome,pessoa,rg){
    this.nome = nome,
    this.pessoa =pessoa,
    this.rg=rg,
    this.recrutar=function(){
        console.log("Aprovado!!")
    }
}

const pessoa1 = new Pessoa("Caio", 19, 123123)

console.log(pessoa1)
pessoa1.recrutar()