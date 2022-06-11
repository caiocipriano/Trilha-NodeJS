import { Router } from 'express'


//Imports do controller
import { MovieController } from './contollers/MovieController';

const router = Router();

const movieController = new MovieController()
router.get("/movies", movieController.findAll)
router.get("/movie/:id", movieController.findOne)
router.post("/movie", movieController.insertMovie)
router.put("/movie/:id", movieController.updateMovie)

export {router};

