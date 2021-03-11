const { TestScheduler } = require('jest');
const linearSearch = require('../index');

describe('Liner search', () => {
    test('Without duplicate', (done) => {
        expect(
            linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 110)
        ).toEqual([6]); // Output : 6
        expect(
            linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 175)
        ).toEqual([-1]); // Output : -1
        expect(
            linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 30)
        ).toEqual([3]); // Output : 3
        done();
    });

    test('With duplicate', (done) => {
        expect(
            linearSearch([10, 20, 80, 30, 60, 30, 110, 100, 130, 170], 110)
        ).toEqual([6]); // Output : 6
        expect(
            linearSearch([10, 110, 80, 110, 60, 50, 110, 100, 110, 170], 110)
        ).toEqual([1, 3, 6, 8]); // Output : -1
        expect(
            linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 7896)
        ).toEqual([-1]); // Output : 3
        done();
    });
});
