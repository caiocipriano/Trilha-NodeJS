const express = require('express')
const app = express()
const consign = require('consign')
const knex = require('knex')
const knexFile=require('../knexfile')
//const knexLogger = require('knex-logger')

app.db=knex(knexFile.test)
//app.use(knexkLogger(app.db))


consign({cwd:'src'},verbose=false)
    .include('./config/middleware.js')
    .then('./service')
    .then('./routes')
    .then('./config/routes.js')
    .into(app)

app.get("/",(req,res)=>{
    res.status(200).send()
})

module.exports=app