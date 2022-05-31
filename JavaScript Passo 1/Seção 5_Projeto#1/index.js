const express = require("express");
const app = express();
const bodyParser= require('body-parser')
const connection = require('./database/database')
const AskModel = require('./database/Ask')

//Banco de Dados
connection
        .authenticate()
        .then(() =>{
            console.log("Passou!")
        }).catch((erro) =>{
            console.log("Errouuuu")
        })

//Apontando para o Express usar o EJS   
app.set('view engine', 'ejs')
//Apontando para o Express usar as resources na pasta public
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//Rotas
app.get("/", (req,res)=>{
    AskModel.findAll({raw:true}).then(asks=>{
        res.render('index',{
            asks:asks
        })
    })
    res.render('index') //Pagina principal
})

app.get("/ask", (req,res)=>{
    res.render('ask') //Formulario
})

app.post("/saveAsk", (req,res)=>{
    const title = req.body.title
    const description = req.body.description

    AskModel.create({
        title:title,
        description:description
    }).then(()=>{
        res.redirect("/")
    }).catch((erro)=>{
        console.log(erro)
    })
})





//Rodando
app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})