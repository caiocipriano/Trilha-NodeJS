const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const session=require("express-session")

const categoriesController = require('./categories/categoriesController')
const articleController = require('./articles/ArticlesController')
const userController = require('./user/UserController')

const Article = require("./articles/Article")
const Category = require('./categories/Category')
const User = require('./user/User')



//Templates
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(session({
        secret:"qualquercoisa",
        cookie:{maxAge:30000}
}))


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
app.use("/", userController)

app.get("/session", (req,res)=>{
    
})


//Main Page
app.get("/", (req,res)=>{
    Article.findAll({
        order:[['id','DESC']],
        limit:4
    }).then(articles =>{
        Category.findAll().then(categories=>{
            res.render("index",{articles:articles,categories:categories})
        })
    })
})


app.get("/:slug", (req,res)=>{
    const slug = req.params.slug;
    Article.findOne({
        where:{slug:slug}
    }).then(articles=>{
        if(articles!=undefined){
            Category.findAll().then(categories=>{
                res.render("articles",{articles:articles,categories:categories})
            })
        }else{
            res.redirect("/")
        }
    }).catch(erro=>{
        res.redirect("/")
    })
})


app.get("/category/:slug", (req,res)=>{
    const slug = req.params.slug

    Category.findOne({
        where:{
            slug:slug
        },
        include:[{model:Article}]
    }).then(category=>{
        if(category!=undefined){
            Category.findAll().then(categories=>{
                res.render("index",{articles: category.articles, categories:categories})
            })
        }else{
            res.redirect("/")
        }
    }).catch(erro=>{
        res.redirect("/")
    })
})

app.listen("8080", ()=>{
    console.log("O servidor está rodado!")
})