import { Router } from 'express';

//Imports
import movieRoutes from "./routes/movieRoutes"
import categorieRoutes from "./routes/categorieRoutes"
import userRoutes from './routes/userRoutes';

const router = Router();


router.use("/movies", movieRoutes)
router.use("/categories", categorieRoutes)
router.use("/users", userRoutes)


export {router};

