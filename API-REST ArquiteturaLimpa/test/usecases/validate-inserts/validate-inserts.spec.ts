import { Title } from './../../../src/entites/title';
describe('Validação dos inserts',()=>{
    test('não deve aceitar email nulo',()=>{
        const title = null
        expect(Title.validation(title)).toBeFalsy()
    })
    test('não deve aceitar email vazio',()=>{
        const title =''
        expect(Title.validation(title)).toBeFalsy()
    })
    test('deve aceitar um email válido',()=>{
        const title='Doutor Estranho'
        expect(Title.validation(title)).toBeTruthy()
    })
})