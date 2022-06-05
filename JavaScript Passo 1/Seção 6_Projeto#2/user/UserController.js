const express = require('express');
const router = express.Router();
const User = require("./User")
const bcrypt = require('bcryptjs')
//const slugify = require('slugify')

//const Category = require('./Category')


router.get("/admin/users",(req,res)=>{
  User.findAll().then(user =>{
        res.render("admin/users",{users:user})
  })
})

//Formulario de criação
router.get("/admin/users/create",(req,res)=>{
         res.render("admin/users/create")
 })


 //POST de criação de usuario
router.post("/user/create",(req,res)=>{
  const email = req.body.email
  const password = req.body.password

  User.findOne({where:{email:email}}).then((email)=>{

    if(email==undefined){

      var salt = bcrypt.genSaltSync(10)
      const hash =bcrypt.hashSync(password, salt)

      User.create({
        email:email, 
        password:hash
    }).then(()=>{
       res.redirect("/")
    }).catch(()=>{
        res.redirect("/")
    })
    }else{
      res.redirect("/admin/users/create")
    }
  })
})

 router.get("/logout",(req,res)=>{
   req.session.user=undefined;
   res.redirect("/")
 })
 module.exports=router