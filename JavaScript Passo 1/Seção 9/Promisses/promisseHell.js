function pegarId(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

function buscarEmail(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Caio@udemy.com")
        },2000)
    })
}


function enviarEmail(corpo,para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var deuErro=false
            if(!deuErro){
                resolve({time:6, para:"clara@hotmail.com"})
            }else{
                reject("Erro")
            }
        })
    })
}

pegarId().then((id)=>{
    buscarEmail(id).then((email)=>{
        enviarEmail("Ola como vai?", email).then(()=>{
            console.log("Email enviado"+id)
        }).catch(()=>{
            console.log("Erro")
        })
    })
})