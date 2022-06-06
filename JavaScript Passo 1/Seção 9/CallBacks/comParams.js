function enviarEmail(corpo,para,callback){
    setTimeout(()=>{
        console.log(`
            ${para},
            ${corpo}
            De:Victor@udemy.com
        `);
        callback("Caio",19);
},5000)}

console.log("Inicio")
console.log("Seu email foi enviado!")
enviarEmail("Olá, bem vindo a...", "clara@hotmail.com",(nome,idade)=>{
    console.log("Enviadooo")
    console.log(`
        De:${nome},
            ${idade}
    `)
})
