import { Router } from 'express';

//Imports
const router = Router();

router.get('/session/oi',(req,res)=>{
    res.send('ola')
})

export  default router;