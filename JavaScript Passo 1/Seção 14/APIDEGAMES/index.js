const express= require("express")
const app = express()
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

const jwtSecret = "abc"


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

function auth(req,res,next){
  var authToken = req.headers['authorization'];

  if(authToken!=undefined){
    const bearer = authToken.split(' ')
    const token = bearer[1]

    jwt.verify(token, jwtSecret,(erro,data)=>{
      if(erro){
        res.status(401)
      }else{
        req.token=token;
        req.loggedUser={id:data.id,email:data.email}
        req.empresa="Udemy"
        next()
      }
    })

  }else{

  }
 
}

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
        email:"Caio@udemy.com",
        idade:19
    }]
}

app.get("/games",auth,(req,res)=>{
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

//Veridicando Usuario
app.post("/game",(req,res)=>{
  var {email,senha} = req.body;

  if(email!=undefined){

      var user = database.users.find(user=>user.email==email)

      if(user!=undefined){
          if(user.password ==password){
            jwt.sign({id:user.id,email:user.email}, jwtSecret,{expiresIn:"48h"},(erro,token)=>{
              if(erro){
                res.status(400)
              }else{
                res.status(200)
              }
            })
          }else{
            res.status(401)
          }
      }else{
        res.status(404)
      }

  }else{
    res.status(400)
  }

})

app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})