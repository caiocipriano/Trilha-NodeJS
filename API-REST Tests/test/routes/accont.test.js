const request = require('supertest')
const app = require('../../src/app')
const jwt = require('jwt-simple')

const MAIN_ROUTE = '/v1/accounts'
let user;
let user2;


beforeEach(async()=>{
    const res = await app.service.user.save({name:'UserAccount',email:`${Date.now()}`,password:1234})
    user = {...res[0]}
    user.token= jwt.encode(user,'Segredo!')

    const res2 = await app.service.user.save({name:'UserAccount#2',email:`${Date.now()}`,password:1234})
    user2 = {...res2[0]}
})

test('Deve inserir um usuario com sucesso',()=>{
    return request(app).post(MAIN_ROUTE)
    .send({name:'Acc #1'})
    .set('authorization', `bearer ${user.token}`)

    .then((result)=>{
        expect(result.status).toBe(201)
        expect(result.body.name).toBe('Acc #1')
    })
})

test('Não deve inserir um usuario sem nome',()=>{
    return request(app).post(MAIN_ROUTE)
    .send({})
    .set('authorization', `bearer ${user.token}`)

    .then((result)=>{
        expect(result.status).toBe(400)
        expect(result.body.name).toBe('Nome é um atributo obrigatório')
    })
})

test('Não deve inserir o mesmo nome da conta pra um usuario',()=>{
    return app.db('accounts').insert({name:'AccDuplica',user_id:user.id})
    .then(()=>request(app).post(MAIN_ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .send({name:'AccDuplicada'}))
    .then((res)=>{
        expect(res.status).toBe(400)
        expect(res.body.error).toBe('Já existe um usuario com esse nome')
    })
})



test('Deve listar as contas do usuario',()=>{
    return app.db('accounts').insert([
        {name:'Acc User #1',user_id:user.id},
        {name:'Acc User #2', user_id:user.id},
    ]).then(()=>request(app).get(MAIN_ROUTE)
    .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(200)
        expect(res.status.length).toBe(1)
        expect(res.body[0].name).toBe('Acc User#1')
    }))
})

test('Deve listar usuario por ID',()=>{
    return app.db('accounts')
    .insert({name:'AccByID',user_id:user_id},['id'])
    .then(acc=>request(app).get(`${MAIN_ROUTE}/${acc[0].id}`))
    .set('authorization', `bearer ${user.token}`)

    .then((res)=>{
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('AccByID')
        expect(res.body.user_id).toBe(user.id)
    })
})

test('Não deve retorna a contas de outro usuario',()=>{
    return app.db('accounts')
    .insert({name:'Acc User #3',user_id:user2_id},['id'])
    .then(acc=>request(app)).get(`${MAIN_ROUTE}/${acc[0].id}`)
        .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(403)
        expect(res.body.error).toBe('Este recurso não pertece ao usuário')
    })
})


test('Deve alterar uma conta',()=>{
    return app.db('accounts')
    .insert({name:'AccToUpdat',user_id:user_id},['id'])
    .then(acc=>request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
    .send({name:'Acc Updated'}))
    .set('authorization', `bearer ${user.token}`)

    .then((res)=>{
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('AccToUptated')
    })
})

test('Não eve alterar a contas de outro usuario',()=>{ 
    return app.db('accounts')
    .insert({name:'Acc User #3',user_id:user2_id},['id'])
    .then(acc=>request(app)).put(`${MAIN_ROUTE}/${acc[0].id}`)
    .send({name:'Acc Updated'})
        .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(403)
        expect(res.body.error).toBe('Este recurso não pertece ao usuário')
    })
})


test('Deve remoover uma conta',()=>{
    return app.db('accounts')
    .insert({name:'AccDeleted',user_id:user_id},['id'])
    .then(acc=>request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`)
    .send({name:'Acc Deleted'}))
    .set('authorization', `bearer ${user.token}`)

    .then((res)=>{
        expect(res.status).toBe(204)
    })
})

test('Não eve remover a contas de outro usuario',()=>{
    return app.db('accounts')
    .insert({name:'Acc User #2',user_id:user2_id},['id'])
    .then(acc=>request(app)).delete(`${MAIN_ROUTE}/${acc[0].id}`)
        .set('authorization', `bearer ${user.token}`)
    .then((res)=>{
        expect(res.status).toBe(403)
        expect(res.body.error).toBe('Este recurso não pertece ao usuário')
    })
})
