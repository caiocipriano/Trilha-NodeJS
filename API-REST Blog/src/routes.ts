import { Router } from 'express'


//Imports do controller
import { MovieController } from './contollers/MovieController';
import { CategorieController } from './contollers/CategorieController';

const router = Router();

const movieController = new MovieController()
router.get("/movies", movieController.findAll)
router.get("/movie/:id", movieController.findOne)
router.post("/movie", movieController.insertMovie)
router.put("/movie/:id", movieController.updateMovie)
router.delete("/movie/:id", movieController.deleteMovie)

const categorieController = new CategorieController()
router.get("/categories", categorieController.findAll)
router.get("/categorie/:id", categorieController.findOne)
router.post("/categorie", categorieController.insertCategorie)
router.put("/categorie/:id",categorieController.updateCategorie)
router.delete("/categorie/:id", categorieController.deleteCategorie)


export {router};

