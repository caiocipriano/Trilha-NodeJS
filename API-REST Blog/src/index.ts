import { PrismaClient } from '@prisma/client'
import express  from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

//Filmes
//Listando todos os Filmes e a categoria é exibida com o id
app.get('/movies', async (req, res) => {
    const movie = await prisma.movie.findMany()
    res.json(movie)
  })

//Buscando um filme pelo ID
  app.get(`/movie/:id`, async (req,res) => { //Uso da crase na mina Rota
    const {id} = req.params  
    const movie = await prisma.movie.findFirst({
        where:{Id:Number(id)},include:{categorie:true}
    })
    res.json(movie)
  })


 //Inserindo um Filme
 app.post(`/movie`,async (req,res) => {
    const {title,year,time,nameTitle} = req.body
    const result = await prisma.movie.create({
        data:{
            title,
            year,
            time,
            categorie:{connect:{name:nameTitle}} /*Atributo referencia do pris, connect
                                                  name é a refencia nameTitle a variavel                            */
        }
    })
    res.json(result)
 }) 


 //Atualizando um Filme
 app.put('/movie/:id', async (req, res) => {
    const { id } = req.params
    const {title,year,time, nameTitle} = req.body
    const movie = await prisma.movie.update({
      where: { Id: Number(id) },
      data: {
        title,
        year,
        time,
        categorie:{connect:{name:nameTitle}}
       },
    })
    res.json(movie)
  })


//Removendo um filme
app.delete(`/movie/:id`, async(req,res)=>{
    const {id} = req.params
    const movie = await prisma.movie.delete({
        where:({Id:Number(id)})
    })
    res.json(movie)
})




//Categorias
//Listando Categorias e seus filmes
app.get("/categories",async (req,res) => {
    const categories = await prisma.categorie.findMany({
        include:{movies:true}
    })
    res.json(categories)
})

//Inserindo um categoria
app.post(`/categorie`,async (req,res) => {
    const result = await prisma.categorie.create({
        data:{...req.body}
    })
    res.json(result)
})



//CONTROLLER
/*async function main() {

 //CRIANDO UM FILME   
/*const newMovie= await prisma.movie.create({
        data:{
              title:"Thor, Amor e Trovão",
              year:"2022",
              time:"2:30hrs",
              categorieID:1           
            }       
 })
      console.log("Catálogo criado: "+newMovie)
    
      const allMov = await prisma.movie.findMany({})
      console.log("Todas categorias:")
      console.dir(allMov,{depth:null})*/


//CRIANDO UMA CATEGORIA E UM FILME - QUERY ANINHADA
  /*const newCat= await prisma.categorie.create({
    data:{
        name:"Ação",
        movies:{
            create:{
                    title:"Doutor Estranho",
                    year:"2022",
                    time:"2hrs",              
            }
        }
    }
  })
  console.log("Catálogo criado: "+newCat)

  const allCat = await prisma.categorie.findMany({
    include:{movies:true} //Pegando o relacionamento para exibir
  })
  console.log("Todas categorias:")
  console.dir(allCat,{depth:null})
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())*/


//Rodando Servidor
app.listen(8080,()=>{
    console.log("Rodando...")
})