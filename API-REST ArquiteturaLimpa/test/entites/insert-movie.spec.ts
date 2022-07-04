import { Session } from './../../src/entites/session';
describe('',()=>{
    test('should create session',()=>{
        const title ='Thor:Love And Thunder'
        const genre = 'Action'
        const session:Session=Session.create({title:title,genre:genre}).value as Session
        expect(session.title.value).toEqual(title)
        expect(session.genre.value).toEqual(genre)
    })
})