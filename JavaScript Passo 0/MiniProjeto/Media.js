const array=[70,80,90]

function media(array){
    let soma=0
    for(let i = 0;i<array.length;i++){
        soma+=array[i];
    }
    const resul = soma/3
    console.log(Math.floor(resul))

    if(resul >= 0 && resul <=59){
        console.log("F")
    }else if(resul>=60 && resul<=69){
        console.log("D")
    }else if(resul>=70 && resul <=79){
        console.log("C")
    }else if(resul>=80 && resul <=89){
        console.log("B")
    }else if(resul>=90 && resul <=100){
        console.log("A")
    }

}

media(array)