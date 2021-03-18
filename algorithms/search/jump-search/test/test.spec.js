const { TestScheduler } = require('jest')
const jumpSearch = require('../index')

const searchArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

describe('Jump search', () => {
    test('Size jump 4', (done) => {
        expect(jumpSearch(searchArray, 55, 4)).toBe(10)
        expect(jumpSearch(searchArray, 0, 4)).toBe(0)
        expect(jumpSearch(searchArray, 610, 4)).toBe(15)
        expect(jumpSearch(searchArray, 233, 4)).toBe(13)
        expect(jumpSearch(searchArray, 6101, 4)).toBe(-1)
        done();
    })

    test('Size jump 10', (done) => {
        expect(jumpSearch(searchArray, 55, 10)).toBe(10)
        expect(jumpSearch(searchArray, 0, 10)).toBe(0)
        expect(jumpSearch(searchArray, 610, 10)).toBe(15)
        expect(jumpSearch(searchArray, 233, 10)).toBe(13)
        expect(jumpSearch(searchArray, 6101, 10)).toBe(-1)
        done();
    })
})