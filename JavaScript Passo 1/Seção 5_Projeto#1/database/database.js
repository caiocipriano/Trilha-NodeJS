const Sequelize = require('sequelize');
const connection = new Sequelize('ask_guide','root','admin',{
    host:'localhost',
    dialect:'mysql'
});

module.exports=connection;