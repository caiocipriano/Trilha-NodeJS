const Sequelize = require('sequelize')
const connection = require("./database")

const Ask = connection.define('ask',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

//Criação da tabela
Ask.sync({force:false}).then(()=>{});

module.exports = Ask;
