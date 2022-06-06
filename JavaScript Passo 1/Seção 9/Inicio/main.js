function enviarEmail(corpo,para){
    setTimeout(()=>{
        console.log(`
            ${para},
            ${corpo}
            De:Victor@udemy.com
        `)
},5000)}

console.log("Inicio")
enviarEmail("Olá, bem vindo a...", "clara@hotmail.com")
console.log("Enviadooo")
console.log('OK')