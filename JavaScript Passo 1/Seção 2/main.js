const http = require('http')

http.createServer(function(request, ansewr){
    ansewr.end("<h1>Bem vindo ao meu Site!</h1")
}).listen(8080)

console.log("Meu servidor está rodadno...")