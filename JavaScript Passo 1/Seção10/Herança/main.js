class Animal{
    constructor(raca,idade,preco){
        this.raca;
        this.idade;
        this.preco
    }

    FazerSom(){

    }
}

class Cachorro extends Animal{
    constructor(raca,idade,preco,pelo) {
      super(raca,idade,preco)
      this.pelo; //Novo atributo
    }
    FazerSom(){
        super.FazerSom()
        console.log("AuAu!")
    }
}