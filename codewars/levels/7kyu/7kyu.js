// Solved tasks

const repeats = (array) => {
    const check = {};

    array.forEach((elemt) => {
        check[elemt] = 0;
    });

    countElement();
    function countElement() {
        array.forEach((element) => {
            check[element] += 1;
        });
    }

    let sumArray = [];

    for (let item in check) {
        if (check[item] === 1) {
            sumArray.push(item);
        }
    }

    return sumArray.reduce((sum, current) => +sum + +current, 0);
};

function total(arr) {
    if (arr.length === 0) return 0;

    function findNumbersWithPrimeIndex() {
        let tmp = [];

        for (let i = 2; i < arr.length; i++) {
            let flag = false;

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    flag = true;
                }
            }

            if (!flag) {
                tmp.push(i);
            }
        }

        return tmp;
    }

    let primeIndex = findNumbersWithPrimeIndex();
    let tmp = 0;

    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        if (primeIndex[tmp] === i) {
            sum.push(arr[i]);
            tmp++;
        }
        // for(let j = 0; j < primeIndex.length; j++) {

        // }
    }

    // console.log(sum);
    return sum.reduce((previous, item) => previous + item);
}

const mirror = (array) => {
    let tmp = array.map((item) => item);
    tmp.sort((a, b) => a - b);

    let res = [...tmp];
    for (let i = tmp.length - 2; i >= 0; i--) res.push(res[i]);

    return res;
};

const removeConsecutiveDuplicates = (s) => {
    let arrayS = s.split(" ");

    // index of the last item added to array result
    let mark = 0;

    // final array
    let result = [];

    for (let i = 0; i < arrayS.length; i++) {
        if (i === 0) {
            // don't see on previous elemnt
            if (arrayS[i] !== arrayS[i + 1]) {
                result.push(arrayS[i]);
                result.push(arrayS[i + 1]);
                mark = i + 1;
                continue;
            }
            result.push(arrayS[i + 1]);
            mark = i + 1;
            continue;
        }

        if (i === arrayS.length - 1) {
            // don't see on next elemnt
            if (arrayS[i] !== arrayS[mark]) result.push(arrayS[i]);
            continue;
        }

        if (arrayS[i] === arrayS[i + 1]) continue;

        if (arrayS[i] !== arrayS[mark]) {
            result.push(arrayS[i]);
            mark = i;
        }
    }

    return result.join(" ");
};

const sumOfN = (n) => {
    let tmp = [];

    if(n < 0) {
        let j = 0;
        for(let i = 0; i >= n; i--) {
            if(i === 0) {
                tmp.push(0);
                j++;
                continue;
            }
            let res = tmp[j - 1] - i;
            tmp.push(res);
            j++;
        }

        for(let i = 1; i < tmp.length; i++) tmp[i] *= -1;
        return tmp;
    }
    
    for(let i = 0; i <= n; i++) {
        if(i === 0) {
            tmp.push(0);
            continue;
        }
        tmp.push(tmp[i - 1] + i);
    }

    return tmp;
};

const consecutive = (arr, a, b) => {
    let indexA = 0;
    let indexB = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === a) indexA = i;
        if(arr[i] === b) indexB = i;    
    }

    console.log(indexA, indexB);

    if(indexA < indexB ) return ( (indexB - indexA) > 1 ) ? false : true;
    return ( (indexA - indexB) > 1 ) ? false : true 
};

const tripleX = (str) => {
    let index = str.indexOf("x");
    if(index === -1) return false;

    if( str[index] === str[index+1] && str[index] === str[index+2]) return true;
    return false;
}


function List(){
    this.countSpecDigits=function(integersList, digitsList){
        console.log(integersList, digitsList);
        console.log();
        console.log();
        if(digitsList.length === 0) return [];
        if( integersList.length === 0 ) return digitsList.map( item => [item, 0]);

        return digitsList.map( item => [item, integersList.reduce((acc, current) => {
            if( current.toString().length === 1) return (current === item) ? acc + 1 : acc;

            let tmpArr = current.toString().split("");
            tmpArr.forEach( tmp => {
                if(item === (+tmp)) {
                    acc++;
                }
            });
            return acc;
        }, 0)]);
    }
}

let l = new List();


const reverseIt = (data) => {
    return (typeof data === "number") ? data.toString().split("").reverse().join("") : (typeof data === "string") ? data.split("").reverse().join("") : data;
}
// Not solved tasks


const oddOrEven = (array) => {
    if(array.length === 1 & array[0] === 0 || array.length === 0) return "even";
    let summ = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            summ += -array[i];
            continue;
        }
        summ += array[i]
    }

    return ( summ % 2 === 0) ? "even" : "odd"
}







// just do it xD

// export
module.exports = {
    repeats: repeats,
    total: total,
    mirror: mirror,
    removeConsecutiveDuplicates: removeConsecutiveDuplicates,
    sumOfN: sumOfN,
    consecutive : consecutive,
    tripleX : tripleX,
    l : l,
    reverseIt : reverseIt,
    oddOrEven : oddOrEven
};
