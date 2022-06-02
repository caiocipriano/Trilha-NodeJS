const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

//Templates
app.set('view engine', 'ejs');
app.use(express.static('public'))

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

connection
          .authenticate()
          .then(()=>{
              console.log("Conexão com Sucesso!")
          }).catch((erro)=>{
              console.log(erro)
          })



app.get("/", (req,res)=>{
    res.render("index")
})

app.listen("8080", ()=>{
    console.log("O servidor está rodado!")
})