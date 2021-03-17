const interpolation = require('../index');

const arraySearch = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

describe('iterpolation search', () => {
    test('Not found', (done) =>  {
        expect(interpolation(arraySearch, 100)).toBe(-1)    
        done();
    })

    test('first element', (done) =>  {
        expect(interpolation(arraySearch, 10)).toBe(0)    
        done();
    })

    test('middle element', (done) =>  {
        expect(interpolation(arraySearch, 21)).toBe(7)    
        done();
    })

    test('last element', (done) =>  {
        expect(interpolation(arraySearch, 47)).toBe(14)    
        done();
    })
})