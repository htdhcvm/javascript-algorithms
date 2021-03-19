
const interpolation = (array, searchNumber) => {

    let lo = 0;
    let hi = array.length - 1;

    // console.log(lo, hi, array[lo], array[hi])
    while( lo <= hi  ) {
        if(lo === hi) {
            if(array[lo] === searchNumber) return lo;
            return -1;
        }

        const pos = Math.floor( lo + (hi - lo) / ( array[hi] - array[lo] ) * ( searchNumber - array[lo]))
        if(array[pos] === searchNumber)
            return pos;

        if( array[pos] < searchNumber )
            lo = pos + 1;
        else 
            hi = pos - 1;
        // console.log('a')
    }

    return -1;
}

module.exports = interpolation;