import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';


import { UserController } from '../contollers/UserController';
import isAuthenticated from '../middleware/isAuthenticated';

const router = Router();

const userController = new UserController()

router.get("/",isAuthenticated ,userController.findAll)


router.get("/:id",isAuthenticated,celebrate({
    [Segments.PARAMS]:{
        id:Joi.number().required(),}
}),userController.findOne)


router.post("", userController.insertUser)

router.put("/:id", celebrate({
    [Segments.PARAMS]:{
          id:Joi.number().required(),}
}),userController.updateUser)

router.delete("/:id",celebrate({
    [Segments.PARAMS]:{
        id:Joi.number().required(),}
}), userController.deleteUser)

export default router