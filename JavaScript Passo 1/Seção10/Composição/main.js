class Deletar{
    Deletar(){
        console.log("Deletando...")
    }
}

class Criar{
    Criar(){
        console.log("Criando...")
    }
}

class Ler{
    Ler(){
        console.log("Lendo...")
    }
}

class Manipulador{
    constructor(nome){//Nome é o arquivo
        this.arquivo=nome;
        this.ler=Ler();
        this.deletar=Deletar()
    }
}

var manipulador= new Manipulador("")//Parametrono 'nome' que é o nome do arquivo

manipulador.deletar.deletar()
manipulador.ler.ler()
