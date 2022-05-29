const endereco={
    Rua:"Rua José Carneiro de Barro Cmapelo",
    Cidade:"Jaboatão",
    Cep:54100465,
}

function exibeObjeto(endereco){
    for(let chave in endereco){
        console.log(chave,":"+ endereco[chave])
    }
}

exibeObjeto(endereco)