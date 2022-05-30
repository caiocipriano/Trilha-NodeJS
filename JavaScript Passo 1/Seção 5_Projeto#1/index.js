const express = require("express");
const app = express();

//Apontando para o Express usar o EJS   
app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get("/:nome?/:lang?", (req,res)=>{
    const nome = req.params.nome
    const lang = req.params.lang
    const carrinho = [
        {produto:"S20Fe", preco:2100.50},
        {produto:"SmartDex",  preco:400},
        {produto:"SmartCooler", preco:60}
        ]
    if(nome && lang){
        res.render('index.ejs',{
            nome:nome,
            lang:lang,
            empresa:"Any",
            msg: false,
            carrinho: carrinho
        })
    }else{
        res.send("Erro!")
    }
})



app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})