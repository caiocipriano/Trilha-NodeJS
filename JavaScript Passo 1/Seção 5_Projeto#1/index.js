const express = require("express");
const app = express();

//Apontando para o Express usar o EJS   
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.render('index')
})

app.get("/ask", (req,res)=>{
    res.render('ask')
})


app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})