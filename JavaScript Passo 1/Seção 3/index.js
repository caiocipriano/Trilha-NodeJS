const express = require('express'); //IMportando Express
const app = express(); //Iniciando Express

//Criando primeira rota
app.get("/", function(req, res){
    res.send("BemVindo(a) ao Site!")
})


//Parametro obrigatorio
app.get("/perfil/:nome", function(req,res){
    const nome= req.params.nome
    res.send("<h2>Seu Perfil, " +nome+ "</h2>")
})


//Parametro opcional  "?" No final do parametro
app.get("/loja/:item?", function(req,res){
    const item= req.params.item
    if(item){
        res.send("<h2>Item: "+item+"</h2>")
    }else{
        res.send("<h2>BemVindo(a) a Loja!</h2>")
    }
    
})



//Fica Por Ultimo
app.listen(8080, function(erro){
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})
