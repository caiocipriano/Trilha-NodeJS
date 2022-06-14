import { Router } from 'express';

//Imports
import movieRoutes from "./routes/movieRoutes"
import categorieRoutes from "./routes/categorieRoutes"
import userRoutes from './routes/userRoutes';
import sessionsRouter from './routes/sessionRoutes';

const router = Router();


router.use("/movies", movieRoutes)
router.use("/categories", categorieRoutes)
router.use("/users", userRoutes)

router.use("/session",sessionsRouter)


export {router};

