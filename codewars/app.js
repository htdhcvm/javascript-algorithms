const seventhKyu = require('./levels/7kyu/7kyu'),
    sixthKye = require('./levels/6kyu/6kyu'),
    fifthKye = require('./levels/5kyu/5kyu'),
    fourthKye = require('./levels/4kyu/4kyu'),
    thirdKye = require('./levels/3kyu/3kyu'),
    secondKye = require('./levels/2kyu/2kyu'),
    firstKye = require('./levels/1kyu/1kyu');

// ------------------------------------------------------------------------------------------ //

// console.log(seventhKyu.sumOfN(3), [0, 1, 3, 6]);
// console.log(seventhKyu.sumOfN(-4), [0, -1, -3, -6, -10]);
// console.log(seventhKyu.sumOfN(1), [0, 1]);
// console.log(seventhKyu.sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);

// ------------------------------------------------------------------------------------------ //

// console.log(seventhKyu.consecutive([1, 3, 5, 7], 3, 7), "false");
// console.log(seventhKyu.consecutive([1, 3, 5, 7], 3, 1), "true");
// console.log(seventhKyu.consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), "true");

// ------------------------------------------------------------------------------------------ //

// console.log(seventhKyu.tripleX("abraxxxas"), "true");
// console.log(seventhKyu.tripleX("xoxotrololololololoxxx"), "false");
// console.log(seventhKyu.tripleX("soft kitty, warm kitty, xxxxx"), "true");
// console.log(seventhKyu.tripleX("softx kitty, warm kitty, xxxxx"), "false");
// console.log(seventhKyu.tripleX("asd"), "false");

// ------------------------------------------------------------------------------------------ //

// let integersList = [];
// let digitsList = [];

// integersList =  [1, 1, 2, 3, 1, 2, 3, 4];
// digitsList = [1, 3];
// console.log(seventhKyu.l.countSpecDigits(integersList, digitsList), [[1, 3], [3, 2]]);
// console.log("-------------------------------------------------------------------------");
// console.log();

// integersList = [-18, -31, 81, -19, 111, -888];
// digitsList = [1, 8, 4];
// console.log(seventhKyu.l.countSpecDigits(integersList, digitsList), [[1, 7], [8, 5], [4, 0]]);
// console.log("-------------------------------------------------------------------------");
// console.log();

// integersList = [-77, -65, 56, -79, 6666, 222];
// digitsList = [1, 8, 4];
// console.log(seventhKyu.l.countSpecDigits(integersList, digitsList), [[1, 0], [8, 0], [4, 0]]);
// console.log("-------------------------------------------------------------------------");
// console.log();

// integersList = [-77, -65, 56, -79, 6666, 222];
// digitsList = [];
// console.log(seventhKyu.l.countSpecDigits(integersList, digitsList), []);
// console.log("-------------------------------------------------------------------------");
// console.log();

// integersList = [];
// digitsList = [1, 8, 4];
// console.log(seventhKyu.l.countSpecDigits(integersList, digitsList), [[1, 0], [8, 0], [4, 0]]);

// ------------------------------------------------------------------------------------------ //

// console.log(seventhKyu.reverseIt("Hello"), "olleH")
// console.log(seventhKyu.reverseIt(314159), 951413)
// console.log(seventhKyu.reverseIt("314159"), "951413")
// console.log(seventhKyu.reverseIt([]), [])

// console.log( seventhKyu.oddOrEven([1]), 'odd')
// console.log( seventhKyu.oddOrEven([]), 'even')
// console.log( seventhKyu.oddOrEven([0, 1, 5]), 'even')
// console.log( seventhKyu.oddOrEven([0, 1, 3]), 'even')
// console.log( seventhKyu.oddOrEven([1023, 1, 2]), 'even')
// console.log( seventhKyu.oddOrEven([0, -1, -5]), 'even')
// console.log( seventhKyu.oddOrEven([0, -1, -3]), 'even')
// console.log( seventhKyu.oddOrEven([-1023, 1, -2]), 'even')
// console.log( seventhKyu.oddOrEven([0, 1, 2]), 'odd')
// console.log( seventhKyu.oddOrEven([0, 1, 4]), 'odd')
// console.log( seventhKyu.oddOrEven([1023, 1, 3]), 'odd')
// console.log( seventhKyu.oddOrEven([0, -1, 2]), 'odd')
// console.log( seventhKyu.oddOrEven([0, 1, -4]), 'odd')
// console.log( seventhKyu.oddOrEven([-1023, -1, 3]), 'odd')
// console.log( seventhKyu.oddOrEven([0]), 'even')

// console.log(seventhKyu.sortEven([7, 1])); // =>  [1, 7]
// console.log(seventhKyu.sortEven([5, 8, 6, 3, 4])); // =>  [3, 8, 6, 5, 4]

// console.log(arr.length);
// let start_1 = Date.now();
// seventhKyu.sortEven(arr); // =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// console.log(Date.now() - start_1);

// let start_2 = Date.now();
// seventhKyu.sortEven_2(arr); // =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// console.log(Date.now() - start_2);

// let start_3 = Date.now();
// seventhKyu.sortEven_3(arr); // =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// console.log(Date.now() - start_3);

// console.log(sixthKye.revrot('123456987654', 6)); // --> "234561876549"
// console.log(sixthKye.revrot('123456987653', 6)); // --> "234561356789"
// console.log(sixthKye.revrot('66443875', 4)); // --> "44668753"
// console.log(sixthKye.revrot('66443875', 8)); // --> "64438756"
// console.log(sixthKye.revrot('664438769', 8)); // --> "67834466"
// console.log(sixthKye.revrot('123456779', 8)); // --> "23456771"
// console.log(sixthKye.revrot('', 8)); // --> ""
// console.log(sixthKye.revrot('123456779', 0)); // --> ""

// console.log(
//     sixthKye.restaurant(
//         99,
//         51,
//         [
//             1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1,
//             1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2,
//             2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1,
//             2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1,
//             2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2,
//             2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
//             1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 1,
//             2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1,
//         ]
//     )
// );

// console.log(sixthKye.restaurant(1, 2, [1, 2, 1, 1]));

// console.log(
//     sixthKye.rank(
//         'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
//         [4, 2, 1, 4, 3, 1, 2],
//         8
//     )
// );

// console.log(sixthKye.rank('', [4, 2, 1, 4, 3, 1, 2], 6));

// console.log(
//     'result -> ',
//     sixthKye.rank(
//         'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
//         [4, 2, 1, 4, 3, 1, 2],
//         4
//     )
// );

// console.log(
//     'result -> ',
//     sixthKye.rank(
//         'Matthew,Lagon,Liam,Emma,Olivai,Aubrey,Logan,Isabella,Mason,Natalie,Benjamin,Sophia,Ethan,Olivia,Grace',
//         [6, 4, 4, 3, 4, 2, 4, 1, 3, 6, 4, 6, 1, 5, 2],
//         8
//     )
// );

// console.log(
//     'result -> ',
//     sixthKye.rank(
//         'Daniel,Lagon,Grace,Avery,Ava,David,Noah,Ethan,Aubrey,Lyli,Emma,Abigail',
//         [6, 3, 6, 4, 6, 1, 3, 4, 5, 4, 2, 1],
//         7
//     )
// );

// console.log(
//     sixthKye.findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
// );

// console.log('\n');

// let a1 = ['live', 'strong', '', 'lyal', 'lysh', 'arp'];
// let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
// console.log('result ->', sixthKye.inArray(a1, a2));
// console.log('expected ->', ['arp', 'live', 'strong']);

// console.log('\n');
