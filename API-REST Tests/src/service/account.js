const app = require("../app")
const accounts = require("../routes/accounts")

module.exports=()=>{
    const save = async(accounts)=>{
        if(!accounts.name) return {error:"Nome é um atributo obrigatório"}
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