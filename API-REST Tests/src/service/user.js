const bcrtypt = require('bcrypt-nodejs')

const ValidationError = require("../errors/ValidationError")

module.exports = (app)=>{
    const findAll = ()=>{
        return app.db("users").where().select(['id','name','email'])
        }

    const findOne = ()=>{
        return app.db("users").where().first()
    }

    const getPasswdHash = (password)=>{
        const salt =bcrtypt.genSaltSync(10)
        return bcrtypt.hashSync(password,salt)
    }

    const create = async (user) =>{
        if(!user.name)throw new ValidationError("Nome é obrigatorio")
        if(!user.email)throw new ValidationError("Email é obrigatorio")
        if(!user.password)throw new ValidationError("Passoword é obrigatorio")

        const userDb = await findOne({email:user.email})
        if(userDb)throw new ValidationError("Já exite um usuario com este email")

        user.password=getPasswdHash(user.password)
        return app.db('users').insert(user,['id','name','email']);
    }    
         
    return {findAll,findOne, create}
}

