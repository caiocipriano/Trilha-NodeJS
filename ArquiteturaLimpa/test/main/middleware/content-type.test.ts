import request from 'supertest'
import app from '@/main/config/app'


describe('', ()=>{
    test('', async()=>{
        app.get('/test_content_type',(req,res)=>{
            res.send('')
        })
        await request(app)
        .get('/test_content_type')
        .expect('content_type', /Json/)
    })

    test('',async ()=>{
        app.get('/test_content_type_xml',(req,res)=>{
            res.type('xml')
            res.send('')
        })
        await request(app)
        .get('/test_content_type_xml')
        .expect('content_type', /xml/)
    })
})