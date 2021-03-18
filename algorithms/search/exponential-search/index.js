
const exponential = (array, itemSearch) => {
    if (array[0] === itemSearch) return 0;

    let i = 1;

    while( i < array.length && array[i] <= itemSearch ) 
        i *= 2;

    return binary(array, itemSearch, i / 2, i)
    
}

const binary = (array, itemSearch, l, r) => {
    let start = l;
    let end = r;

    while(start <= end) {
        const middle = Math.round(start + ( end - start ) / 2);
        if(array[middle] === itemSearch) return middle;

        if(array[middle] === undefined) return -1;
        if(array[middle] < itemSearch) start = middle
        if(array[middle] > itemSearch) end = middle 
    }
    return -1;
}

module.exports = exponential;