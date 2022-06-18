const user = require("../routes/user")

module.exports = (app)=>{
    const findAll = (filter={})=>{
        return app.db("users").where(filter).select()
        }


    const create = async (req,res) =>{
        if(!user.name)return {error:"Nome é obrigatorio"}
        if(!user.email)return {error:"Email é obrigatorio"}
        if(!user.password)return {error:"Passoword é obrigatorio"}

        const userDb = await findAll({user:user.email})
        if(userDb&&userDb.length>0)return{error:"Já existe email"}

        return app.db('users').insert(users,'*')
         }    
         
    return {findAll, create}
}

