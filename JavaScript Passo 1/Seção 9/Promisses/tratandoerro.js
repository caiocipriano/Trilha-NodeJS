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


async function principal(){
    var id = await pegarId()
    var busca = await buscarEmail()
   try{ 
       enviarEmail()
    }catch(erro){
        console.log(erro)
    }
}
 principal()
