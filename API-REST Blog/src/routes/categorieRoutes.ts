import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';


import { CategorieController } from '../contollers/CategorieController';

const router = Router();

const categorieController = new CategorieController()


router.get("/categories", categorieController.findAll)

router.get("/:id",celebrate({[Segments.PARAMS]:{
    id:Joi.number().required(),}
}), categorieController.findOne)

router.post("/categorie", categorieController.insertCategorie)

router.put("/:id",celebrate({
[Segments.PARAMS]:{
    id:Joi.number().required(),}
}),categorieController.updateCategorie)

router.delete("/:id",celebrate({
[Segments.PARAMS]:{
    id:Joi.number().required(),}
}), categorieController.deleteCategorie)

export default router