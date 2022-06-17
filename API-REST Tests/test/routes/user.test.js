const request = require('supertest')
const app = require('../../src/app')


test("Deve listar todos usuario", ()=>{
    return request(app).get('/users')
    .then(res=>{
        expect(res.status).toBe(200);
        expect(res.body.lenght).toBeGreaterThan(0)
    })
})

test("Deve inserir usuario com sucesso", ()=>{
    const email = `${Date.now()}@email.com`
    return request(app).post("/users")
    .send({name:'caio',email:email, passoword:'123'})
    .then(res=>{
        expect(res.status).toBe(201)
        expect(res.body.name).toBe('caio')
    })
})

test("Não deve inserir usuario sem nome",()=>{
    
})