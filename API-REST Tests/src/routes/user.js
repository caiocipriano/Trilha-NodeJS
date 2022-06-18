module.exports = (app)=>{
    const findAll = (req,res)=>{
        app.service.user.findAll()
        .then((result) => {res.status(200).json(result)
        })
    }
    
    const create = async (req,res) =>{
       const resul = await app.service.user.save(req.body)
       if(resul.error)return res.status(400).json(resul)
        res.status(201).json(resul[0])
    }

    return {findAll, create}
}

