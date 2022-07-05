import { Router } from 'express';
import sessionRoutes from '../routes/sessionRoutes';


const router = Router();


router.use("/session", sessionRoutes)


export {router};
