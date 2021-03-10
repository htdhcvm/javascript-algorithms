const { TestScheduler } = require('jest')
const linearSearch = require('../index')

test('Linear search', () => {
    expect(linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 110)).toBe(6) // Output : 6
    expect(linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 175)).toBe(-1) // Output : -1
    expect(linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 30)).toBe(3) // Output : 3

})