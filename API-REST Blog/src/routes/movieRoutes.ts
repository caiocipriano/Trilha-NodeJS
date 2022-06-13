import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';


import { MovieController } from '../contollers/MovieController';

const router = Router();

const movieController = new MovieController()

router.get("/movies", movieController.findAll)


router.get("/:id",celebrate({
    [Segments.PARAMS]:{
        id:Joi.number().required(),}
}),movieController.findOne)


router.post("", movieController.insertMovie)

router.put("/:id", celebrate({
    [Segments.PARAMS]:{
          id:Joi.number().required(),}
}),movieController.updateMovie)

router.delete("/:id",celebrate({
    [Segments.PARAMS]:{
        id:Joi.number().required(),}
}), movieController.deleteMovie)

export default router