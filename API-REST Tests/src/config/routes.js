module.exports = (app)=>{
    app.routes('/auth/signin').post(app.routes.auth.signin)
    app.routes('/auth/signup').post(app.routes.auth.create)


    app.routes('/users')
    .all(app.config.passport.authenticated())
    .get(app.routes.user.findAlll)
    .post(app.routes.user.create)
    
    app.routes('/accounts')
    .all(app.config.passport.authenticated())
    .post(app.routes.accounts.create)
    .get(app.routes.accounts.getAll)

    app.routes('/accounts/:id')
    .all(app.config.passport.authenticated())
    .get(app.routes.accounts.get)
    .put(app.raoutes.accounts.update)
    .delete(app.routes.accounts.remove)
}
