const request = require('supertest')
const app = require('../../src/app')

const MAIN_ROUTE = '/accounts'
let user;

beforeAll(async()=>{
    const res = await app.service.user.save({name:'UserAccount',email:`${Date.now()}`,password:1234})
    user = {...res[0]}
})

test('Deve inserir um usuario com sucesso',()=>{
    return request(app).post(MAIN_ROUTE)
    .send({name:'Acc #1', user_id:user_id})
    .then((result)=>{
        expect(result.status).toBe(201)
        expect(result.body.name).toBe('Acc #1')
    })
})

test('Não deve inserir um usuario sem nome',()=>{
    return request(app).post(MAIN_ROUTE)
    .send({ user_id:user_id})
    .then((result)=>{
        expect(result.status).toBe(400)
        expect(result.body.name).toBe('Nome é um atributo obrigatório')
    })
})

test.skip('Não deve inserir  o mesmo nome da conta pra um usuario',()=>{})

test('Deve listar  todas as constas',()=>{
    return app.db('accounts')
    .insert({name:'AccList',user_id:user_id})
    .then(()=>request(app).get(MAIN_ROUTE))
    .then((res)=>{
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

test.skip('Deve listar as contas do usuario',()=>{})

test('Deve listar usuario por ID',()=>{
    return app.db('accounts')
    .insert({name:'AccByID',user_id:user_id},['id'])
    .then(acc=>request(app).get(`${MAIN_ROUTE}/${acc[0].id}`))
    .then((res)=>{
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('AccByID')
        expect(res.body.user_id).toBe(user.id)
    })
})

test.skip('Não eve retorna a contas de outro usuario',()=>{})


test('Deve alterar uma conta',()=>{
    return app.db('accounts')
    .insert({name:'AccToUpdat',user_id:user_id},['id'])
    .then(acc=>request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
    .send({name:'Acc Updated'}))
    .then((res)=>{
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('AccToUptated')
    })
})

test.skip('Não eve alterar a contas de outro usuario',()=>{})


test('Deve remoover uma conta',()=>{
    return app.db('accounts')
    .insert({name:'AccDeleted',user_id:user_id},['id'])
    .then(acc=>request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`)
    .send({name:'Acc Deleted'}))
    .then((res)=>{
        expect(res.status).toBe(204)
    })
})

test.skip('Não eve remover a contas de outro usuario',()=>{})
