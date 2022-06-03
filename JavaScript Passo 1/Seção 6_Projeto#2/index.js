const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const categoriesController = require('./categories/categoriesController')
const articleController = require('./articles/ArticlesController')

const Article = require("./articles/Article")
const Category = require('./categories/Category')


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
    Article.findAll({
        include:[{model:Category}]
    }).then(articles =>{
        res.render("index",{articles:articles})
    })
})


app.get("/:slug", (req,res)=>{
    const slug = req.params.slug;
    Article.findOne({
        where:{slug:slug}
    }).then(articles=>{
        if(articles!=undefined){
            res.render("")
        }else{
            res.render("/")
        }
    }).catch(erro=>{
        res.render("/")
    })
})


app.listen("8080", ()=>{
    console.log("O servidor está rodado!")
})