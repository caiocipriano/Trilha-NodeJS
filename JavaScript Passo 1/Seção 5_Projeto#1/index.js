const express = require("express");
const app = express();
const bodyParser= require('body-parser')
const connection = require('./database/database')
const questionModel = require('./database/question')
const answerModel = require('./database/answer');
const answer = require("./database/answer");

//Banco de Dados
connection
        .authenticate()
        .then(() =>{
            console.log("Passou!")
        }).catch((erro) =>{
            console.log("Errouuuu")
        })

//Apontando para o Express usar o EJS   
app.set('view engine', 'ejs')
//Apontando para o Express usar as resources na pasta public
app.use(express.static('public'));

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//Rotas

//Listar Perguntas
app.get("/", (req,res)=>{
    questionModel.findAll({raw:true , order:[['id','DESC']]}).then(questions=>{
        res.render('index',{
            question:questions
        })
    })
})


//Formulario
app.get("/toAsk", (req,res)=>{
    res.render('toAsk') 
})


//Salvar uma pergunta
app.post("/saveAsk", (req,res)=>{
    const title = req.body.title
    const description = req.body.description

    questionModel.create({
        title:title,
        description:description
    }).then(()=>{
        res.redirect("/")
    }).catch((erro)=>{
        console.log(erro)
    })
})

//Buscar Pergunta por ID
app.get("/question/:id", (req,res)=>{
    const id = req.params.id
    questionModel.findOne({
        where:{id:id}
    }).then(question=>{
        if(question!=undefined){
            answerModel.findAll({
                where:{questionId: question.id},
                order:[['id','DESC']]
                }).then(answers=>{
                    res.render("question",{
                        question:question,
                        answers:answers
                    })
                })
        }else{
            res.render("/")
        }
    })
})

//Realizar uma resposta

app.post("/toAnswer", (req,res)=>{
    const body = req.body.body;
    const questionId = req.body.question;

    answerModel.create({
        body:body,
        questionId:questionId
    }).then(()=>{
        res.redirect("/question/"+questionId)
    })
})

//Rodando
app.listen(8080, erro=>{
    if(erro){
        console.log("Erro!")
    }else{
        console.log("Servidor Rodando...")
    }
})