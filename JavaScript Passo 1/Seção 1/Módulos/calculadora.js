const nome = "Sou uma mensagem de outro arquivo!!"


function soma(a,b){
    return a+b;
}

function sub(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}


module.exports={
    soma,
    sub,
    mult,
    nome
};