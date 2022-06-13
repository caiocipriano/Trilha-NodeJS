import { Router } from 'express';

//Imports
import movieRoutes from "./routes/movieRoutes"
import categorieRoutes from "./routes/categorieRoutes"

const router = Router();


router.use("/movies", movieRoutes)
router.use("/categories", categorieRoutes)


export {router};

