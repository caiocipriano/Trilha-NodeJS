const ValidationError = require("../errors/ValidationError")

module.exports = (app)=>{
    const findAll = (filter={})=>{
        return app.db("users").where(filter).select()
        }


    const create = async (req,res) =>{
        if(!user.name)throw new ValidationError("Nome é obrigatorio")
        if(!user.email)throw new ValidationError("Email é obrigatorio")
        if(!user.password)throw new ValidationError("Passoword é obrigatorio")

        const userDb = await findAll({user:user.email})
        if(userDb&&userDb.length>0)return{error:"Já existe email"}

        return app.db('users').insert(users,'*')
         }    
         
    return {findAll, create}
}

