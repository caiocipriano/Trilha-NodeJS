const request = require('supertest')
const jwt = require('jwt-simple')

const app = require('../../src/app')

const MAIN_ROUTE = '/v1/accounts'
const email = `${Date.now()}@email.com`

let user;

beforeAll(async()=>{
    const res = await app.service.user.save({name:'UserAccount',email:`${Date.now()}`,password:1234})
    user = {...res[0]}
    user.token= jwt.encode(user,'Segredo!')
})


test("Deve listar todos usuario", ()=>{
    return request(app).get('/MAIN_ROUTE')
    .set('authorization', `bearer ${user.token}`)
    .then(res=>{
        expect(res.status).toBe(200);
        expect(res.body.lenght).toBeGreaterThan(0)
    })
})

test("Deve inserir usuario com sucesso", ()=>{
    return request(app).post("/MAIN_ROUTE")
    .set('authorization', `bearer ${user.token}`)
    .send({name:'caio',email:email, passoword:'123'})
    .then(res=>{
        expect(res.status).toBe(201)
        expect(res.body.name).toBe('caio')
        expect(res.body).not.toHaveProperty('password')
    })
})


test('Deve salvar sena criptografada',()=>{
    const res = await request(body).post('/MAIN_ROUTE')
    .send({name:"CaioCipriano",email:`${Date.now()}@email.com`,passoword:'1234'})
    .set('authorization', `bearer ${user.token}`)
    expect(res.status).toBe(201)

    const {id}= res.body
    const userDB=await app.service.user.findOne({id})
    expect(userDB.passoword).not.toBeUndefined()
    expect(userDB.passoword).not.toBe('1234')
})

test("Não deve inserir usuario sem nome",()=>{
    return request(app).post('/MAIN_ROUTE')
    .send({email:'@caio.com', passoword:'123'})
    .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Nome é um atributo obrigatorio")
    })
})


test("Não deve inserir usuario sem email", async()=>{
    const resul = await  request(app).post('/MAIN_ROUTE')
    .send({name:'caio', passoword:'123'})
    .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Nome é um atributo obrigatorio")
    })
})

test("Não deve inserir usuario sem senha", (done)=>{
    request(app).post('/MAIN_ROUTE')
    .send({name:'caio', email:'@caio.com'})
    .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Senha é um atributo obrigatorio")
        done();
    })
})



test("Não deve inserir usuario com email existente", async()=>{
    const resul = await  request(app).post('/MAIN_ROUTE')
    .send({name:'caio', passoword:'123'})
    .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe("Já existe email")
    })
})