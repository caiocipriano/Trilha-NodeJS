const nomes=[
    {id:1,nome:"Caio"},
    {id:2,nome:"Clara"}]

const nome = nomes.find(function compara(nome){
    return nome.nome=="Caio";
})
console.log(nome)