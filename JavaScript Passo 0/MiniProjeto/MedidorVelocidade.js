function medeVelocidade(num){
    if(num<= 70 ){
        console.log("Ok")
    }else{
        const pontos = Math.floor((num -70)/5)
        if(pontos>=12){
            console.log("Carteira suspendida por exceder "+ pontos + " pontos")
        }else{
            console.log("Multa por velocidade:" +pontos+" Pontos")
        }
    }
}

medeVelocidade(81)