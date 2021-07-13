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

describe('rank', () => {
    test('if nRand more then quantity participant -> return "Not enough participants"', () => {
        expect(
            sixthKye.rank(
                'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
                [4, 2, 1, 4, 3, 1, 2],
                8
            )
        ).toBe('Not enough participants');
    });

    test('if quantity participant is zero -> return "No participants"', () => {
        expect(sixthKye.rank('', [4, 2, 1, 4, 3, 1, 2], 6)).toBe(
            'No participants'
        );
    });

    test('Should -> return Benjamin', () => {
        expect(
            sixthKye.rank(
                'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
                [4, 2, 1, 4, 3, 1, 2],
                4
            )
        ).toBe('Benjamin');
    });

    test('Should -> return Lagon', () => {
        expect(sixthKye.rank('Lagon,Lily', [1, 5], 2)).toBe('Lagon');
    });

    test('Should -> return Aubrey', () => {
        expect(
            sixthKye.rank(
                'Noah,Michael,Avery,James,Lily,Logan,Isabella,Grace,Sofia,Madison,Lyli,Daniel,Elijah,Andrew,Willaim,Ethan,Liam,Alexander,Abigail,Samantha,Aubrey',
                [2, 6, 6, 2, 6, 4, 2, 4, 4, 2, 1, 5, 1, 4, 4, 5, 5, 1, 3, 5, 2],
                13
            )
        ).toBe('Aubrey');
    });
});

describe('', () => {
    test('expected 5', () => {
        expect(
            sixthKye.findOdd([
                20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
            ])
        ).toBe(5);
    });
    test('expected -1', () => {
        expect(sixthKye.findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1);
    });
    test('expected 5', () => {
        expect(
            sixthKye.findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])
        ).toBe(5);
    });
    test('expected 10', () => {
        expect(sixthKye.findOdd([10])).toBe(10);
    });
    test('expected 10', () => {
        expect(sixthKye.findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10);
    });
    test('expected 1', () => {
        expect(sixthKye.findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toBe(1);
    });
});
