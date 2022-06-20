const app = require("../app")

module.exports = ()=>{
    app.routes('/users')
    .get(app.routes.user.findAlll)
    .post(app.routes.user.create)
    
    app.route('/accounts')
    .post(app.routes.accounts.create)
    .get(app.routes.accounts.getAll)

    app.route('/accounts/:id')
    .get(app.routes.accounts.get)
    .put(app.raoutes.accounts.update)
    .delete(app.routes.accounts.remove)
}
