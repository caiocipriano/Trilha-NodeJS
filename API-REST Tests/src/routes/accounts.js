const app = require("../app")

module.exports=()=>{
    const create = (req,res)=>{
        app.service.account.save(req.body)
        .then((result)=>{
            if(result.error) return res.status(400).json(result)
            return res.status(201).json(result[0])
        })
    }
    const getAll=(req,res)=>{
        app.service.account.findAll()
        .then(result=>res.status(200).json(result))
    }

    const get=(req,res)=>{
        app.service.account.find({id:req.params.id})
        .then((result)=>res.status(200).json(result))
    }

    const update=(req,res)=>{
        app.service.account.update(req.params.id,req.body)
        .then((result)=>{
            return res.status(201).json(result[0])
        })
    }

    const remove=(req,res)=>{
        app.service.account.remove(req.params.id)
        .then(()=>res.status(204).send())
    }

    return{
        create,getAll,get,update,remove,
    }
}