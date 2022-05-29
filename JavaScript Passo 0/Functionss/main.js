let corSite = "Roxo"
function resetaCor(cor,tonalidade){
    corSite=cor + tonalidade;
}

/*
console.log(cor);
resetaCor();
console.log(cor);
*/

/*
console.log(cor)
resetaCor("Vermelho");
console.log(corSite);
*/

console.log(corSite)
resetaCor("Vermelho"," Escuro");
console.log(corSite);


/*Lição*/

let resultadoAluno=null;

function alteraResultado(resultado){
        resultadoAluno=resultado;
}

alteraResultado("Aprovado")
console.log(resultadoAluno)