const selection = require('../index');

const willSort_1 = [64, 25, 12, 22, 11];
const willSort_2 = [11, 25, 12, 10, 9];

describe('selection sort', () => {
    test('defaul sequence', () => {
        expect(selection(willSort_1)).toEqual([11, 12, 22, 25, 64])
    })

    test('try trap', () => {
        expect(selection(willSort_2)).toEqual([9, 10, 11, 12, 25])
    })

})