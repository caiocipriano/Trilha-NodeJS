const Sequelize = require('sequelize')
const connection = require("./database")


const question = connection.define('question',{//'ask' é o nome da tabela
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
question.sync({force:false}).then(()=>{});

module.exports = question;
