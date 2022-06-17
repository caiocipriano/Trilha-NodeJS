module.exports = (app)=>{
    const findAll = ()=>{
        return app.db("users").select()
        }


    const create = async (req,res) =>{
        return app.db('users').insert(users,'*')
         }    

    return {findAll, create}
}

