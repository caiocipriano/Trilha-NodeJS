const { Sequelize } = require('sequelize')
const connection = new Sequelize('blog_express','root','admin',{
    host:'localhost',
    dialect:'mysql',
    timezone:"-03:00"
})

module.exports=connection;