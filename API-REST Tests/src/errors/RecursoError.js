module.exports=function ValidationError(message='Este recurso não pertece ao usuário'){
    this.name="RecursoError"
    this.message=message
}