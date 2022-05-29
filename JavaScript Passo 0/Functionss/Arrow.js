const nomes=[
    {id:1,nome:"Caio"},
    {id:2,nome:"Clara"}]


 /*   const nome = nomes.find(function compara(nome){
        return nome.nome=="Caio";
    })
    console.log(nome)*/

//====Se houver apenas um paramRemovendo 'function' e o parenteses do param
 /*const nome = nomes.find( nome => {  
    return nome.nome=="Caio";
})*/


 //===Removendo o return e as chaves
/*const nome = nomes.find(nome => nome.nome=="Caio");*/

const nome = nomes.find(nome => nome.nome=="Caio") ; //Removendo o return e as chaves


console.log(nome)