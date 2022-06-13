import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import 'express-async-erros';

//Imports do controller
import { MovieController } from './contollers/MovieController';
import { CategorieController } from './contollers/CategorieController';

const router = Router();

const movieController = new MovieController()
const categorieController = new CategorieController()

router.get("/movies", movieController.findAll)

router.get("/movie/:id",
                celebrate({
                    [Segments.PARAMS]:{
                        id:Joi.number().required(),
                    }
                }),movieController.findOne)

                
router.post("/movie", movieController.insertMovie)

router.put("/movie/:id", 
                celebrate({
                    [Segments.PARAMS]:{
                          id:Joi.number().required(),
                    }
                }),movieController.updateMovie)

router.delete("/movie/:id",
                celebrate({
                    [Segments.PARAMS]:{
                        id:Joi.number().required(),
                    }
                }), movieController.deleteMovie)

router.get("/categories", categorieController.findAll)

router.get("/categorie/:id",
                celebrate({
                    [Segments.PARAMS]:{
                        id:Joi.number().required(),
                    }
                }), categorieController.findOne)
router.post("/categorie", categorieController.insertCategorie)

router.put("/categorie/:id",
                celebrate({
                    [Segments.PARAMS]:{
                        id:Joi.number().required(),
                    }
                }),categorieController.updateCategorie)

router.delete("/categorie/:id",
                celebrate({
                    [Segments.PARAMS]:{
                        id:Joi.number().required(),
                    }
                }), categorieController.deleteCategorie)


export {router};

