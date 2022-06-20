const app = require("../app")

module.exports=()=>{
    const create = (req,res,next)=>{
        app.service.account.save(req.body)
        .then((result)=>{
            return res.status(201).json(result[0])
        }).cath(err=>next(err))
    }
    const getAll=(req,res,next)=>{
        app.service.account.findAll()
        .then(result=>res.status(200).json(result))
        .cath(err=>next(err))
    }

    const get=(req,res,next)=>{
        app.service.account.find({id:req.params.id})
        .then((result)=>res.status(200).json(result))
        .cath(err=>next(err))
    }

    const update=(req,res,next)=>{
        app.service.account.update(req.params.id,req.body)
        .then((result)=>{
            return res.status(201).json(result[0])
            .cath(err=>next(err))
        })
    }

    const remove=(req,res,next)=>{
        app.service.account.remove(req.params.id)
        .then(()=>res.status(204).send())
        .cath(err=>next(err))
    }

    return{
        create,getAll,get,update,remove,
    }
}