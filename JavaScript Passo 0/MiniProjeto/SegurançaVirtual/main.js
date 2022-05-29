

function verifica(){
    convidados = ["Manuel", "Alcione" , "Davi", "Caio"]
    nomeConvidado = document.getElementById('convidado').value;

    if(convidados.includes(nomeConvidado)){
        document.getElementById('resultado').innerText ="Você pode Entrar!"
    }else{
        document.getElementById('resultado').innerText ="Você não pode Entrar!"
    }
}