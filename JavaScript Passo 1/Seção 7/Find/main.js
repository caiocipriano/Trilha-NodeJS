var caio = {
    nome:"Caio",
    idade:19
}

var thiago = {
    nome:"thiago",
    idade:19
}

var lucas = {
    nome:"lucas",
    idade:19
}

var users =[caio,thiago,lucas]
var user= users.find(user=>user.nome=="Caio")

console.log(user)