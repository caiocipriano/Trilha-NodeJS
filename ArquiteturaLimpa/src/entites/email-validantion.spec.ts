import { Email } from "./email"

describe('validando emails',()=>{
    test('não deve aceitar email nulo',()=>{
        const email = null
        expect(Email.validate(email)).toBeFalsy()
    })
    test('não deve aceitar email vazio',()=>{
        const email =''
        expect(Email.validate(email)).toBeFalsy()
    })
    test('deve aceitar um email válido',()=>{
        const email='any@email'
        expect(Email.validate(email)).toBeTruthy()
    })
    test('não deve aceitar primeira parte do email com mais de 64 carac',()=>{
        const email ='l'.repeat(65)+'@email.com'
        expect(Email.validate(email)).toBeFalsy()
    })
    test('não deve aceitar email com mais de 320 carac',()=>{
        const email ='l'.repeat(64)+'@'+'d'.repeat(128)+'.'+'d'.repeat(127)
        expect(Email.validate(email)).toBeFalsy()
    })
})