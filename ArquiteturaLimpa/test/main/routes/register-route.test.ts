import app from '@/main/config/app';
import  request  from 'supertest';

describe('', ()=>{
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