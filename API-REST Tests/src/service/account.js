const app = require("../app")
const ValidationError = require("../errors/ValidationError")

module.exports=()=>{
    const save = async(accounts)=>{
        if(!accounts.name) throw new ("Nome é um atributo obrigatório")
        return app.db('accounts').insert(account,'*')
    }

    const findAll = ()=>{
        return app.db('accounts')
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