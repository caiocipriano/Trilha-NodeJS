const express = require('express');
const router = express.Router();
const User = require("./User")
//const slugify = require('slugify')

//const Category = require('./Category')

router.get("/admin/users",(req,res)=>{
   // Category.findAll().then(categories =>{
        res.render("admin/users")
  //  })
})

router.get("/admin/users/create",(req,res)=>{
         res.render("admin/users/create")
 })

router.post("/users/create",(req,res)=>{
  const email = req.body.email
  const password = req.body.password
  res.json({email,password})
})

 
 module.exports=router