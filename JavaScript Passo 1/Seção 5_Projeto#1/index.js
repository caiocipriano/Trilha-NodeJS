const express = require("express");
const app = express();

const bodyParser= require('body-parser')

//Apontando para o Express usar o EJS   
app.set('view engine', 'ejs')
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//Rotas
app.get("/", (req,res)=>{
    res.render('index')
})

app.get("/ask", (req,res)=>{
    res.render('ask')
})

app.post("/saveAsk", (req,res)=>{
    const title = req.body.title
    const description = req.body.description
    res.send("Paasou!"+title+description)
})





//Rodando
app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})