/*const connection = require('mysql2')*/
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'admin',
      database : 'knex_js'
    }
  });


  module.exports=knex