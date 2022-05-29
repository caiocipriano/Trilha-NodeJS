function Postagem(titulo,messagem,autor,vizualizacoes,estaAovivo){
    this.titulo=titulo,
    this.messagem=messagem,
    this.autor=autor,
    this.vizualizacoes=vizualizacoes,
    this.estaAovivo=estaAovivo
    this.comentarios=function(autorComent,mensagemComent){
        console.log(autorComent, mensagemComent)
    }
}

const postagem1 = new Postagem("Greve", "Lorem", "Caio", 774, true)
console.log(postagem1)
postagem1.comentarios("Thais","Concordo")