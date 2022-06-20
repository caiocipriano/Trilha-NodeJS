const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const express= require('express')


const ValidationError = require("../errors/ValidationError")

const secret ='Segredo!'

module.exports=(app)=>{
    const router = express.Router()

    router.post('/signin' ,(req,res,next)=>{
        app.service.user.findOne({email:req.body.email})
        .then((user)=>{
            if(!user)throw new ValidationError('Usuário ou senha errados')
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload={
                    id:user.id,
                    name:user.name,
                    email:user.mail
                }
                const token =jwt.encode(payload,secret)
                res.status(200).json({token})
            }else throw new ValidationError('Usuário ou senha errados')
        }).catch(err=>next(err))
    })

    router.post('/signup' ,(req,res,next)=>{
    const create = async (req,res,next) =>{
        try {
        const resul = await app.service.user.save(req.body)
        return res.status(201).json(resul[0])
        } catch (error) {
            next(error)
        }
    }

})
    return{router}
}