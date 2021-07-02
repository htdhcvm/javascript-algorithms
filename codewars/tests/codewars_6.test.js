const sixthKye = require('../levels/6kyu/6kyu');

describe('Reverse or rotate?', () => {
    test('empty string chunk size is big', () => {
        expect(sixthKye.revrot('', 8)).toBe('');
    });
    test('exist string but chunk size is zero', () => {
        expect(sixthKye.revrot('1234', 0)).toBe('');
    });
    test('empty string and zero chunk', () => {
        expect(sixthKye.revrot('', 8)).toBe('');
    });
    test('exist string but chunk size is bigger', () => {
        expect(sixthKye.revrot('1234', 5)).toBe('');
    });

    test('params: str = 123456987654 sz = 6 return => 234561876549', () => {
        expect(sixthKye.revrot('123456987654', 6)).toBe('234561876549');
    });

    test('params: str = 123456987653 sz = 6 return => 234561356789', () => {
        expect(sixthKye.revrot('123456987653', 6)).toBe('234561356789');
    });

    test('params: str = 66443875 sz = 4 return => 44668753', () => {
        expect(sixthKye.revrot('66443875', 4)).toBe('44668753');
    });

    test('params: str = 66443875 sz = 8 return => 64438756', () => {
        expect(sixthKye.revrot('66443875', 8)).toBe('64438756');
    });

    test('params: str = 664438769 sz = 8 return => 67834466', () => {
        expect(sixthKye.revrot('664438769', 8)).toBe('67834466');
    });

    test('params: str = 123456779 sz = 8 return => 23456771', () => {
        expect(sixthKye.revrot('123456779', 8)).toBe('23456771');
    });

    test('params: str = 563000655734469485 sz = 4 return => 0365065073456944', () => {
        expect(sixthKye.revrot('563000655734469485', 4)).toBe(
            '0365065073456944'
        );
    });
});
