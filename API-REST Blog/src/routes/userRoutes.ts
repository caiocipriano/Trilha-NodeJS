import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';


import { UserController } from '../contollers/UserController';

const router = Router();

const userController = new UserController()

router.get("/users", userController.findAll)


router.get("/:id",celebrate({
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