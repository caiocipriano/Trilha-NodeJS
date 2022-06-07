const fs = require("fs")

/*fs.readFile("./caio.txt",{encoding:"utf-8"} ,(erro,dados)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log(dados)
    }
})

fs.writeFile("./caio.txt","Conteudo a ser excrito",(erro)=>{
    if(erro){
        console.log("Erro")
    }
})*/

//Lendo e Escrevendo em JSON
function modicarUsuario(nome,idade){
    fs.readFile("./user",{encoding:"utf-8"} ,(erro,dados)=>{
        if(erro){
            console.log(erro)
        }else{
            var conteudo = JSON.parse(dados)
            conteudo.nome;
            conteudo.idade;
    
            fs.writeFile("./caio.txt",JSON.stringify(conteudo),(erro)=>{
                if(erro){
                    console.log("Erro")
                }
            })
        }
    })
}


modicarUsuario("Clara", 20)
