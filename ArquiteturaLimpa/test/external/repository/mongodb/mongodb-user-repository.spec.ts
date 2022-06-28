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

    test('', async()=>{
        const userRepository = new MongodbUserRepository()
       await userRepository.add({
            name:'any_name',
            email:'any@email.com'
        })
       await userRepository.add({
            name:'second_name',
            email:'second@email.com'
        })
        const user = await userRepository.findAllUser()
        expect(user[0].name).toEqual('any_name')
        expect(user[1].name).toEqual('second_name')
    })
})