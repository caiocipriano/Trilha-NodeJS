import { MongoHelper } from '@/external/repository/mongodb/helper/mongo-helper';
import app from '@/main/config/app';
import  request  from 'supertest';

describe('', ()=>{
    beforeAll(async () => {
        await MongoHelper.connect('localhost:27017')
    })

    afterAll(async () => {
        await MongoHelper.disconnect()    
    })
    beforeEach(async () => {
        MongoHelper.clearCollection('user')
    })
    test('', async()=>{
        app.post('/test_cors',(req,res)=>{
            res.send()
        })
        await request(app)
            .post('/api/register')
            .send({
                name:'AnyName',
                email:'Any@email.com'
            })
            .expect(201)
    })
})