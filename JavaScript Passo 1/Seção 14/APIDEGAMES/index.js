const express= require("express")
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var database={
    games:[
        {
            id:12,
            title:"Ark",
            ano:2019,
            preco:60
        },
        {
            id:13,
            title:"Injustice",
            ano:2014,
            preco:40
        },
        {
            id:14,
            title:"Batman",
            ano:2015,
            preco:20
        }
    ],
    users:[{

    }]
}

app.get("/games",(req,res)=>{
    res.json(database.games)
})

app.get("/games/:id",(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)

        var game = database.games.find(g=>{
            g.id==id
        })

        if(game!=undefined){
            res.statusCode=200
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})


app.post("/game",(req,res)=>{
    var {title,ano,preco} = req.body;

    database.games.push({
            id:1321,
            title,
            ano,
            preco
    })
})

app.post("/game",(req,res)=>{
    var {title,ano,preco} = req.body;

    database.games.push({
            id:1321,
            title,
            ano,
            preco
    })
})

app.delete("/game/:id",(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)

        var game = database.games.findIndex(g=>{
            g.id==id
        })

        if(index==-1){
            res.sendStatus(404)
        }else{
            database.games.splice(index,1)
            res.sendStatus(200)
        }


    }
})

app.put("/game/:id",(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)

        var game = database.games.findIndex(g=>{
            g.id==id
        })

        if(games!=undefined){
            var {title,ano,preco} = req.body;

            if(title!=undefined){
                games.title=title
            }
            if(ano!=undefined){
                games.ano=ano
            }

            if(preco!=undefined){
                games.preco=preco
            }


        }else{
            res.sendStatus(200)
        }

    }
})



app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})