function enviarEmail(corpo,para,callback){
    setTimeout(()=>{
      var deuErro = false
      if(deuErro){
          console.log("Passou!")
      } else{
          console.log("Deu Erro!")
      }
},5000)}

console.log("Inicio")
console.log("Seu email foi enviado!")
enviarEmail("Olá, bem vindo a...", "clara@hotmail.com",(erro)=>{
        if(erro==undefined){
            console.log("Enviadooo")
        }else{
            console.log("Deu Erro!")
        }
})
