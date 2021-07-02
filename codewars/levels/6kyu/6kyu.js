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

// export
module.exports = {
    generateColor: generateColor,
    revrot: revrot,
};
