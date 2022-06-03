const express = require('express')
const router = express.Router()
const Category = require('../categories/Category')
const Article = require('./Article')
const slugify = require("slugify")

router.get("/admin/articles",(req,res)=>{
    Article.findAll({
        include:[{model:Category}]
    }).then(articles =>{
        res.render("admin/articles/index",{articles:articles})
    })
})

router.get("/admin/articles/new",(req,res)=>{
    Category.findAll().then(categories =>{
        res.render("admin/articles/new",{categories:categories})
    })
})

router.post("/articles/save", (req,res)=>{
    const title = req.body.title
    const body = req.body.body
    const category =req.body.category

    Article.create({
        title:title,
        slug:slugify(title),
        body:body,
        categoryId:category
    }).then(()=>{
        res.redirect("/admin/articles")
    }).catch(()=>{
        res.render("/")
    })
})

//Deletando um artigo
router.post("/articles/delete", (req,res)=>{
    const id = req.body.id
    if(id!=undefined){
        if(!isNaN(id)){
            Article.destroy({
                where:{id:id}
            }).then(()=>{
                res.redirect("/admin/articles")
            })
        }else{
            res.redirect("/admin/articles")
        }
    }else{
        res.redirect("/admin/articles")
    }
    
})

//Paginação da edição de artigo
router.get("/admin/articles/edit/:id",(req,res)=>{ 
    const id = req.params.id
    if(isNaN(id)){
        res.redirect("/admin/articles")
    }
    Article.findByPk(id).then(article=>{
        if(article!=undefined){
            Category.findAll().then(categories=>{
                res.render("admin/articles/edit",{categories:categories})
            })
        }else{
            res.redirect("/admin/articles")
        }
    }).catch(erro=>{
        res.redirect("/admin/articles")
    })
})

//Edição de Artigo

router.post("/admin/articles/update", (req,res)=>{
    Article.update(
        {title:title,
        body:body,
        slug:slugify(title)},
        {where:{id:id}}).then(()=>{
            res.redirect("admin/articles")
        })
})
module.exports=router