const { Sequelize } = require('sequelize')
const connection = new Sequelize('blog_express','root','admin',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=connection;