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

  app.get(`/movie/:id`, async (req,res) => { //Uso da crase na mina Rota
    const {id} = req.params  
    const movie = await prisma.movie.findFirst({
        where:{Id:Number(id)},include:{categorie:true}
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