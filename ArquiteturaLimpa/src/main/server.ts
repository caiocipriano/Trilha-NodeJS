import { MongoHelper } from "@/external/repository/mongodb/helper/mongo-helper"

MongoHelper.connect('process.env.MONGO_URL')
    .then(async()=>{
        const app=(await import ('./config/app')).default
        app.listen(8080,()=>{
            console.log("Rodando...")
        }) 
    }).catch(console.error)
