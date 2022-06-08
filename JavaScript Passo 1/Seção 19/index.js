const knex  = require('knex')
const database = require('./database')


var dados = [
    {
        nome:"Wow",
        preco:38
    }
]

//INSERT
/*database.insert(dados).into("tb_games").then(dados =>{
    console.log(dados)
}).catch(erro=>{
    console.log(erro)
})*/


//SELECT
/*
database.select("*").table("tb_games").then(dados =>{
    console.log(dados)
}).catch(erro=>{
    console.log(erro)
})*/

//MULT QUERY
/*database.insert([{nome:"RPG", preco:80}]).into("tb_games").then(dados =>{
    database.select("*").table("tb_games").then(dados =>{
        console.log(dados)
    }).catch(erro=>{
    console.log(erro)
})   
}).catch(erro=>{
    console.log(erro)
})*/


//WHERE
/*database.select(["id","preco"])
            .where({nome:"WOW"})
            .where({id:2}) //Segundo where funciona como um AND
            //.orWhere({id:2}) Funciona como OR
            //whereRaw("nome = "WOW" && preco >50") //Condicionais Cruas
            .table("tb_games").then(dados =>{

            }).catch(erro=>{
    console.log(erro)
        })

*/
//Query Crua
//database.raw("Consulta SQL")

//DELETE
/*database.where({id:3}).delete().table("tb_games").then(dados =>{
    console.log(dados)
}).catch(erro=>{
    console.log(erro)
})*/


//UPDATE
/*database.where({id:1}).update({nome:"NovoNome",preco:"NovoPreco"}).table("tb_games").then(dados =>{
    console.log(erro)
})  
.catch(erro=>{
    console.log(erro)
})
  */


//OrderBy   
/*database.select().table("tb_games").orderBy("preco","desc").then(dados =>{
    console.log(dados)
})  
.catch(erro=>{
    console.log(erro)
})
 */


//Insert Associado
/*database.insert({
    nome:"Blizzard",
    game_id:2
}).table("tb_estudios").then(dados =>{
    console.log(dados)
}).catch(erro=>{
    console.log(erro)
})*/

//InnerJoin
/*database.select([               //select(["games.*","tb_estudios.nome as estudioNome"])
    "tb_games.id as gameId",
    "tb_estudios.id as estudioId",
    "tb_games.nome as game_nome",
    "tb_estudios.nome as estudio_nome"
])
    .table("tb_games")
        .innerJoin("tb_estudios","tb_estudios.game_id","tb_games.id").then(dados =>{
    console.log(dados)
})  
.catch(erro=>{
    console.log(erro)
})*/
 

//InnerJoin com WHERE
/*database.select([               
    "tb_games.id as gameId",
    "tb_estudios.id as estudioId",
    "tb_games.nome as game_nome",
    "tb_estudios.nome as estudio_nome"
])
    .table("tb_games")
        .innerJoin("tb_estudios","tb_estudios.game_id","tb_games.id").where("games.id",5).then(dados =>{
    console.log(dados)
})  
.catch(erro=>{
    console.log(erro)})*/


//InnerJoin 1 para Muitos
/*database.select([               
    "tb_games.id as gameId",
    "tb_estudios.id as estudioId",
    "tb_games.nome as game_nome",
    "tb_estudios.nome as estudio_nome"
])
    .table("tb_games")
        .innerJoin("tb_estudios","tb_estudios.game_id","tb_games.id").then(dados =>{
            console.log(dados)
})  
.catch(erro=>{
    console.log(erro)})*/

//InnerJoin NxN
/*database.select(["tb_estudios.nome","tb_games.nome"])
        .table("games_estudios")
            .innerJoin("tb_games","tb_games.id","games_estudios.game_id")
            .innerJoin("tb_estudios","tb_estudios.id","games_estudios.estudios_id")
            .then(dados =>{
                console.log(dados)
    })  
    .catch(erro=>{
        console.log(erro)})*/


//Protegendo Dados com Transactions

async function testeTrasactions(){

    try {
        await database.trasaction(async trans =>{
            await database.insert({nome:"Qualquer nome"}).table("Qualquer Tabela")
            await database.insert({nome:"Riot Games"}).table("tb_estudios")

           await database.insert(dados).into("tb_games").then(dados =>{
                console.log(dados)
            }).catch(erro=>{
                console.log(erro)
            })
        })
    } catch (error) {
        
    }
 
}