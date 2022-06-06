class Dado{
    constructor(faces){
        this.faces=faces;

    }
    Rodar(faces){
        console.log("Seu numero é: "+ Math.floor(Math.random()*faces))
        
    }
}
  

const dado = new Dado()
dado.Rodar(20)