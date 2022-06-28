import { MongoHelper } from "@/external/repository/mongodb/helper/mongo-helper";
import { MongodbUserRepository } from "@/external/repository/mongodb/mongodb-user-repository";

describe('',()=>{
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()    
    })
    beforeEach(async () => {
        MongoHelper.clearCollection('user')
    })

    test('',async()=>{
        const userReposiotry = new MongodbUserRepository()
        const user = {
            name:'any_name',
            email:'any@email.com'
        }
        await userReposiotry.add(user)
        expect(await userReposiotry.exist(user)).toBeTruthy()
    })
})