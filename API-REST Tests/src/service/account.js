const app = require("../app")
const ValidationError = require("../errors/ValidationError")

module.exports=()=>{
    const save = async(accounts)=>{
        if(!accounts.name) throw new ("Nome é um atributo obrigatório")
        const userDb=await find({name:accounts.name, user_id:user.id})

        if(userDb) throw new ValidationError("Já existe um usuario com esse nome")
        return app.db('accounts').insert(accounts,'*')
    }

    const findAll = (userId)=>{
        return app.db('accounts').where({userId})
    }

    const find = ({filter})=>{
        return app.db('accounts').where(filter)
    }

    const update = (id,account)=>{
        return app.db('accounts')
        .where({id})
        .update(account,'*')
    }

    const remove = (id)=>{
        return app.db('accounts')
        .where({id})
        .del()
    }

    return {
        save,findAll,find,update,remove,
    }
}