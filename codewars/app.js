const seventhKyu = require("./levels/7kyu/7kyu"),
    sixthKye = require("./levels/6kyu/6kyu"),
    fifthKye = require("./levels/5kyu/5kyu"),
    fourthKye = require("./levels/4kyu/4kyu"),
    thirdKye = require("./levels/3kyu/3kyu"),
    secondKye = require("./levels/2kyu/2kyu"),
    firstKye = require("./levels/1kyu/1kyu");



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



console.log( seventhKyu.oddOrEven([1]), 'odd')
console.log( seventhKyu.oddOrEven([]), 'even')
console.log( seventhKyu.oddOrEven([0, 1, 5]), 'even')
console.log( seventhKyu.oddOrEven([0, 1, 3]), 'even')
console.log( seventhKyu.oddOrEven([1023, 1, 2]), 'even')
console.log( seventhKyu.oddOrEven([0, -1, -5]), 'even')
console.log( seventhKyu.oddOrEven([0, -1, -3]), 'even')
console.log( seventhKyu.oddOrEven([-1023, 1, -2]), 'even')
console.log( seventhKyu.oddOrEven([0, 1, 2]), 'odd')
console.log( seventhKyu.oddOrEven([0, 1, 4]), 'odd')
console.log( seventhKyu.oddOrEven([1023, 1, 3]), 'odd')
console.log( seventhKyu.oddOrEven([0, -1, 2]), 'odd')
console.log( seventhKyu.oddOrEven([0, 1, -4]), 'odd')
console.log( seventhKyu.oddOrEven([-1023, -1, 3]), 'odd')
console.log( seventhKyu.oddOrEven([0]), 'even')