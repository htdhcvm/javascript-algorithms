

// Solved tasks

const flip = (d, a) => {
    if (d === "R") {
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (a[j] > a[j + 1]) {
                    let tmp = a[j + 1];
                    a[j + 1] = a[j];
                    a[j] = tmp;
                }
            }
        }
        return a;
    }
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] < a[j + 1]) {
                let tmp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = tmp;
            }
        }
    }

    return a;
}

const greet = (name) => {
    return `Hello, ${name} how are you doing today?`
}

const leastLarger = (a, index) => {
    if (index === -1) return undefined;
    const findIndexMaxElement = (array) => {
        let tmp = array[0];
        let index = 0;
        for (let i = 0; i < array.length; i++) {
            if (tmp < array[i]) {
                tmp = array[i];
                index = i;
            }
        }

        return index;
    }

    const indexMaxElement = findIndexMaxElement(a);

    if (index === indexMaxElement) {
        return -1;
    }


    const sortMinToMax = (array) => {
        array.sort((a, b) => a - b);
    }


    const specifiedElement = a[index];

    let tmp = [];

    for (let i = 0; i < a.length; i++) {
        if (index === i) continue;
        tmp.push(a[i]);
    }


    sortMinToMax(tmp);

    let returnVal = -1;

    for (let i = 0; i < tmp.length; i++) {
        if (specifiedElement < tmp[i]) {
            returnVal = tmp[i];
            break;
        }
    }

    if (returnVal === -1) {
        return returnVal;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] === returnVal) {
            returnVal = i;
            break;
        }
    }

    return returnVal;
}

// Not solved tasks 



// just do it xD



// export 
module.exports = {}
