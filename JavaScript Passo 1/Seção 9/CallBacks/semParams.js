function enviarEmail(corpo,para,callback){
    setTimeout(()=>{
        console.log(`
            ${para},
            ${corpo}
            De:Victor@udemy.com
        `);
        callback();
},5000)}

console.log("Inicio")
console.log("Seu email foi enviado!")
enviarEmail("Olá, bem vindo a...", "clara@hotmail.com",()=>{
    console.log("Enviadooo")
})
