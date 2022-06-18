const request = require('supertest')
const app = require('../../src/app')

const email = `${Date.now()}@email.com`


test("Deve listar todos usuario", ()=>{
    return request(app).get('/users')
    .then(res=>{
        expect(res.status).toBe(200);
        expect(res.body.lenght).toBeGreaterThan(0)
    })
})

test("Deve inserir usuario com sucesso", ()=>{
    return request(app).post("/users")
    .send({name:'caio',email:email, passoword:'123'})
    .then(res=>{
        expect(res.status).toBe(201)
        expect(res.body.name).toBe('caio')
    })
})

test("Não deve inserir usuario sem nome",()=>{
    return request(app).post('/users')
    .send({email:'@caio.com', passoword:'123'})
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Nome é um atributo obrigatorio")
    })
})


test("Não deve inserir usuario sem email", async()=>{
    const resul = await  request(app).post('/users')
    .send({name:'caio', passoword:'123'})
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Nome é um atributo obrigatorio")
    })
})

test("Não deve inserir usuario sem senha", (done)=>{
    request(app).post('/users')
    .send({name:'caio', email:'@caio.com'})
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Senha é um atributo obrigatorio")
        done();
    })
})

test("Não deve inserir usuario sem senha", (done)=>{
    request(app).post('/users')
    .send({name:'caio', email:'@caio.com'})
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Senha é um atributo obrigatorio")
        done();
    })
})


test("Não deve inserir usuario com email existente", async()=>{
    const resul = await  request(app).post('/users')
    .send({name:'caio', passoword:'123'})
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Já existe email")
    })
})