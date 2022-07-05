import { Title } from './../../../src/entites/title';
describe('Validação dos inserts',()=>{
    test('não deve aceitar titulo nulo',()=>{
        const title = null
        expect(Title.validation(title)).toBeFalsy()
    })
    test('não deve aceitar titulo vazio',()=>{
        const title =''
        expect(Title.validation(title)).toBeFalsy()
    })
    test('deve aceitar um titulo válido',()=>{
        const title='Doutor Estranho'
        expect(Title.validation(title)).toBeTruthy()
    })
})