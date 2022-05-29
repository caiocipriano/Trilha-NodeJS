function Endereco(rua,cidade,cep){
    this.rua=rua,
    this.cidade=cidade,
    this.cep=cep
}

const endereco1 = new Endereco("Rua1","Recife",456789)
const endereco2 = new Endereco("Rua1", "Recife", 456789)

function comparaObjeto(obj1, obj2){
    return obj1.rua == obj2.rua && 
    obj1.cidade == obj2.cidade && 
    obj1.cep == obj2.cep
}
console.log(comparaObjeto(endereco1,endereco2))

function comparaLocalMemoria(obj1, obj2){
    return obj1 === obj2
}

console.log(comparaLocalMemoria(endereco1, endereco2))