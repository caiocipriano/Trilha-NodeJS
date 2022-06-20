const request = require('supertest')
const app = require('../../src/app')


test('Deve criar usruario via sigup',()=>{
    return request(app).post('/auth/sigup')
    .send({name:'Caio',email:`${Date.now()}@mail.com}`,password:'123'})
    .then((res)=>{
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Walter')
        expect(res.body).toHaveProperty('email')
        expect(res.body).not.toHaveProperty('password')
    })
})

teste('Deve receber token ao logar', ()=>{
    const email=`${Date.now()}@mail.com}`
    return app.service.user.create({
        name:'CaioCipriano', email, password:'1234'
    }).then(() => {
        request(app).post('/auth/signin')
        .send({email,password:'1234'})
    }).then((res)=>{
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('token')
    })
})  

teste('Não deve autenticar usuario com senhar errada', ()=>{
    const email=`${Date.now()}@mail.com}`
    return app.service.user.create({
        name:'CaioCipriano', email, password:'1234'
    }).then(() => {
        request(app).post('/auth/signin')
        .send({email,password:'6547'})
    }).then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('Usuário ou senha errados')
    })
})  


teste('Não deve autenticar usuario com senhar errada', ()=>{
    return request(app).post('/auth/signin')
        .send({email:'nãoexiste',password:'6547'})
    }).then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('Usuário ou senha errados')
})

test('Não deve ascessar a rota sem autenticação',()=>{
    return request(app).get('/v1/users')
    .then((res)=>{
        expect(res.status).toBe(401)
    })
})