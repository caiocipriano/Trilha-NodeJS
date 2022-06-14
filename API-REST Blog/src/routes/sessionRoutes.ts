import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import {SessionController} from '../contollers/SessionConttroller';

const sessionsRouter = Router();
const sessionsController = new SessionController();

sessionsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.createSession,
);

export default sessionsRouter;