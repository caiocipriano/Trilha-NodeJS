import request from 'supertest'
import app from '@/main/config/app'

describe('',()=>{
    test('',async() =>{
        app.post('/cors-test',(req,res)=>{
            res.send()
        })
        await request(app)
            .get('/cors-test')
            .expect('access-control-allow-origin','*')
            .expect('access-control-allow-headers','*')
            .expect('access-control-allow-methods','*')
    })
})