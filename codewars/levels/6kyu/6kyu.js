// Solved tasks

const generateColor = function () {
    let str = '#';
    const chars = 'ABCDEF';

    for (let i = 0; i < 6; i++) {
        if (Math.round(Math.random())) {
            str += Math.floor(Math.random() * 9);
        } else {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return str;
};

// Not solved tasks

// just do it xD

const revrot = (str, sz) => {
    if (sz <= 0) return '';
    if (sz > str.length) return '';
    if (str.length === 0) return '';

    let res = '';

    const countChunk = Math.floor(str.length / sz);
    const splitedArray = [];

    let startCut = 0;
    for (let i = 0; i < countChunk; i++) {
        splitedArray.push(str.substr(startCut, sz).split(''));
        startCut += sz;
    }

    splitedArray.forEach((item) => {
        const subCubedNumbers = item.reduce((accum, currentVal, index) => {
            if (index === 1)
                return (accum = Math.pow(accum, 3) + Math.pow(currentVal, 3));
            return (accum += Math.pow(currentVal, 3));
        });
        const chunk = item.join('');

        res +=
            subCubedNumbers % 2
                ? chunk.substr(1) + chunk[0]
                : chunk.split('').reverse().join('');
    });

    return res;
};

function restaurant(a, b, t) {
    let total = 0;

    let twoSeaterOccupiedByOnePerson = 0;

    for (const group of t) {
        if (group === 1) {
            if (a > 0) {
                a--;
            } else {
                if (b === 0) {
                    if (twoSeaterOccupiedByOnePerson === 0) total++;
                    else twoSeaterOccupiedByOnePerson--;
                } else {
                    b--;
                    twoSeaterOccupiedByOnePerson++;
                }
            }
        } else {
            if (b > 0) b--;
            else total += 2;
        }
    }

    return total;
}

const rank = (stringNames, arrayWeights, nRankedWin) => {
    if (stringNames.length === 0) return 'No participants';

    const arrayNames = stringNames.split(',');

    if (arrayNames.length < nRankedWin) return 'Not enough participants';

    const rankAlphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };

    const nameSumOnRanked = {};

    arrayNames.forEach((name, index) => {
        let tmpSumChars = 0;
        for (const charName of name) {
            tmpSumChars += rankAlphabet[charName.toLowerCase()];
        }

        nameSumOnRanked[name] =
            (tmpSumChars + name.length) * arrayWeights[index];
    });

    const sortedArrayOnRanked = Object.entries(nameSumOnRanked).sort(
        (first, second) => second[1] - first[1]
    );

    for (let i = 0; i < sortedArrayOnRanked.length - 1; i++) {
        const current = sortedArrayOnRanked[i];
        const next = sortedArrayOnRanked[i + 1];

        if (current[1] === next[1]) {
            for (let j = 0; current[0].length; j++) {
                if (current[0].charCodeAt(j) > next[0].charCodeAt(j)) {
                    let tmp = current;
                    sortedArrayOnRanked[i] = sortedArrayOnRanked[i + 1];
                    sortedArrayOnRanked[i + 1] = tmp;
                    break;
                }
            }
        }
    }

    return sortedArrayOnRanked[nRankedWin - 1][0];
};
// export
module.exports = {
    generateColor: generateColor,
    revrot: revrot,
    restaurant: restaurant,
    rank: rank,
};
