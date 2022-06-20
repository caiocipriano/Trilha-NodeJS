const express= require('express')

module.exports = (app)=>{
    const router = express.Router()

    router.get('/',(req,res,next)=>{
        app.service.user.findAll()
        .then((result) => {res.status(200).json(result)
        .cath(err=>next(err))
        })
    })
    
    router.post('/', async (req,res,next) =>{
        try {
        const resul = await app.service.user.save(req.body)
        return res.status(201).json(resul[0])
        } catch (error) {
            next(error)
        }
    })

    return {router}
}

