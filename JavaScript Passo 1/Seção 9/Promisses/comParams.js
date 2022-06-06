function enviarEmail(corpo,para,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var deuErro=true
            if(!deuErro){
                resolve({nome:"Caio",email:"Caio@udemy.com"})
            }else{
                reject("Sem rota!")
            }
    },5000)
    })
}

console.log("Inicio")
console.log("Seu email foi enviado!")
enviarEmail("Olá, bem vindo a...", "clara@hotmail.com").then(({nome,email})=>{
    console.log(`
        ${nome}
        ${email}
    `)
}).catch((erro)=>{
    console.log("Errooo " + erro)
})
