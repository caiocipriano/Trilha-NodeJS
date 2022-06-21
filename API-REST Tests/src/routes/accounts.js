const express= require('express')


const RecursoError=require('../errors/RecursoError')
const app = require("../app")

module.exports=()=>{
    const router = express.Router()

    router.param('id',(req,res,next)=>{
        app.service.account.find({id:req.params.id})
            .then((acc)=>{
                if(acc.user_id!=req.user.id) throw new RecursoError()
                else next()
            }).cath(erro=>next(erro))
    })

   router.post('/',(req,res,next)=>{
    
        app.service.account.save({...req.body, user_id:req.user.id})
        .then((result)=>{
            return res.status(201).json(result[0])
        }).cath(err=>next(err))
    })
    
    router.get('/',(req,res,next)=>{
        app.service.account.findAll(req.user.id)
        .then(result=>res.status(200).json(result))
        .cath(err=>next(err))
    })




    router.get('/:id',(req,res,next)=>{
        app.service.account.find({id:req.params.id})
        .then((result)=>{res.status(200).json(result)})
        .cath(err=>next(err))
    })

    router.put('/:id',(req,res,next)=>{
        app.service.account.update(req.params.id,req.body)
        .then((result)=>{
            return res.status(201).json(result[0])
            .cath(err=>next(err))
        })
    })

    router.delete('/:id',(req,res,next)=>{
        app.service.account.remove(req.params.id)
        .then(()=>res.status(204).send())
        .cath(err=>next(err))
    })

    return{router}
}