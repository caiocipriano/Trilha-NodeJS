"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title_1 = require("./../../../src/entites/title");
describe('Validação dos inserts', () => {
    test('não deve aceitar titulo nulo', () => {
        const title = null;
        expect(title_1.Title.validation(title)).toBeFalsy();
    });
    test('não deve aceitar titulo vazio', () => {
        const title = '';
        expect(title_1.Title.validation(title)).toBeFalsy();
    });
    test('deve aceitar um titulo válido', () => {
        const title = 'Doutor Estranho';
        expect(title_1.Title.validation(title)).toBeTruthy();
    });
});
