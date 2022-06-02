const Sequelize = require('sequelize');
const connection =require("../database/database")

const Category = connection.define('category',{
    title:{type:Sequelize.STRING,
        allowNull:false},
    slug:{type:Sequelize.TEXT,
    allowNull:false}
})



module.exports=Category;