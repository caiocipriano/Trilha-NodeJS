import { left } from '../../src/shared/either';
import { InvalidEmailError } from '../../src/entites/errors/invalid-email-error';
import { InvalidNameError } from '../../src/entites/errors/invalid-name-error';
import { User } from "../../src/entites/user"

describe('',()=>{
    test('',()=>{
        const invalidEmail = 'invalidEmail'
        const error = User.create({name:"any_name",email:invalidEmail}).value as Error
        expect(error).toEqual('InvalidEmailError')
    })
    test('não deve criar usuario com nome invalido(menos que o minimo caracteres)',()=>{
        const invalideName="O         "
        const error = User.create({name:invalideName,email:'any@email.com'}).value as Error
        expect(error).toEqual('InvalidNameError')
    })
    /*test('não deve criar usuario com nome invalido(mais que maximo caracteres)',()=>{
        const invalideName="O".repeat(257)
        const error = User.create({name:invalideName,email:'any@email.com'})
        expect(error).toEqual(left(new InvalidNameError()))
    })*/
    test('deve criar usuario valido',()=>{
        const validName = 'any_name'
        const validEmail = 'any@email.com'
        const user:User = User.create({name:validName,email:validEmail}).value as User
        expect(user.name.value).toEqual(validName)
        expect(user.email.value).toEqual(validEmail)
    })
})