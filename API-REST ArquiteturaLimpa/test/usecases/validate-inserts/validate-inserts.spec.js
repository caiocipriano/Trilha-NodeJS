"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var title_1 = require("./../../../src/entites/title");
describe('Validação dos inserts', function () {
    test('não deve aceitar titulo nulo', function () {
        var title = null;
        expect(title_1.Title.validation(title)).toBeFalsy();
    });
    test('não deve aceitar titulo vazio', function () {
        var title = '';
        expect(title_1.Title.validation(title)).toBeFalsy();
    });
    test('deve aceitar um titulo válido', function () {
        var title = 'Doutor Estranho';
        expect(title_1.Title.validation(title)).toBeTruthy();
    });
});
