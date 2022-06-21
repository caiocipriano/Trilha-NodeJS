const express = require('express')
const app = express()
const consign = require('consign')
const knexFile=require('../knexfile')
const knex = require('knex')

app.db=knex(knexFile.test)

consign({cwd:'src'},verbose=false)
    .include('./config/passport.js')
    .then('./config/middleware.js')
    .then('./service')
    .then('./routes')
    .then('./config/router.js')
    .into(app)

app.get("/",(req,res)=>{
    res.status(200).send()
})

app.use((erro,req,res,next)=>{
    const {name, message,stack} = erro
    if(erro === 'ValidationError')res.status(400).json({error:message})
    if(erro === 'RecursoError')res.status(403).json({error:message})
    else res.status(500).json({name,message,stack})
    next(erro)
})

module.exports=app