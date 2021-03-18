const exponential = require('../index');

const arraySearch = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

describe('iterpolation', () => {
    test('Not found', (done) =>  {
        expect(exponential(arraySearch, 100)).toBe(-1)    
        done();
    })

    test('first element', (done) =>  {
        expect(exponential(arraySearch, 10)).toBe(0)    
        done();
    })

    test('middle element', (done) =>  {
        expect(exponential(arraySearch, 21)).toBe(7)    
        done();
    })

    test('last element', (done) =>  {
        expect(exponential(arraySearch, 47)).toBe(14)    
        done();
    })
})