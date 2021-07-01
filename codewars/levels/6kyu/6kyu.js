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

// export
module.exports = {
    generateColor: generateColor,
};
