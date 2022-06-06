function enviarEmail(corpo,para,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var deuErro=false
            if(!deuErro){
                resolve()
            }else{
                reject()
            }
    },5000)
    })
}

console.log("Inicio")
console.log("Seu email foi enviado!")
enviarEmail("Olá, bem vindo a...", "clara@hotmail.com").then(()=>{
    console.log("Ok!")
}).catch(()=>{
    console.log("Errooo")
})




