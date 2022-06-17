const app = require("../app")

module.exports = ()=>{
    app.routes('/users')
    .get(app.routes.user.findAlll)
    .post(app.routes.user.create)


}
