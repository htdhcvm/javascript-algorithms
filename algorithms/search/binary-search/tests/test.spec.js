const { binarySearchRecursion, binarySearchLoop } = require('../index');

const searchArray = [2, 3, 4, 10, 40];

describe('Binary search', () => {
    test('Binary search with loop', (done) => {
        expect(binarySearchLoop(searchArray, 2)).toBe(0);
        expect(binarySearchLoop(searchArray, 40)).toBe(4);
        expect(binarySearchLoop(searchArray, 4)).toBe(2);
        expect(binarySearchLoop(searchArray, 10)).toBe(3);
        done();
    });
    test('Binary search with recursion', (done) => {
        expect(binarySearchRecursion(searchArray, 2)).toBe(0);
        expect(binarySearchRecursion(searchArray, 40)).toBe(4);
        expect(binarySearchRecursion(searchArray, 4)).toBe(2);
        expect(binarySearchRecursion(searchArray, 10)).toBe(3);
        done();
    });
});
