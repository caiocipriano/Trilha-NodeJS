module.exports = (app)=>{
    const findAll = (req,res)=>{
        app.service.user.findAll()
        .then((result) => {res.status(200).json(result)
        })
    }
    
    const create = async (req,res) =>{
        try {
        const resul = await app.service.user.save(req.body)
        return res.status(201).json(resul[0])
        } catch (error) {
            res.status(400).json(resul)
        }
    }

    return {findAll, create}
}

