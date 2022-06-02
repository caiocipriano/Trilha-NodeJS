const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/categoriesController')
const articleController = require('./articles/ArticlesController')

const articleModel = require("./articles/Article")
const categoryModel = require("./categories/Category")


//Templates
app.set('view engine', 'ejs');
app.use(express.static('public'))

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//Database Connection
connection
          .authenticate()
          .then(()=>{
              console.log("Conexão com Sucesso!")
          }).catch((erro)=>{
              console.log(erro)
          })

//Rotas Express
app.use("/", categoriesController)
app.use("/", articleController)

//Main Page
app.get("/", (req,res)=>{
    res.render("index")
})

app.listen("8080", ()=>{
    console.log("O servidor está rodado!")
})