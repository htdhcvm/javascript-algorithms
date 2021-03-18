const binarySearchRecursion = (array, findElement) => {
    let start = 0;
    let end = array.length;

    return next(array, start, end, findElement);

    function next(array, start, end, findElement) {
        if (end >= start) {
            const middle = Math.floor(start + (end - start) / 2);
            if (array[middle] === findElement) {
                return middle;
            }

            if (array[middle] > findElement)
                return next(array, start, middle, findElement);
            if (array[middle] < findElement)
                return next(array, middle, end, findElement);
        }
        return -1;
    }
};

const binarySearchLoop = (array, findElement) => {
    let start = 0;
    let end = array.length;

    while (start <= end) {
        const middle = Math.floor(start + (end - start) / 2);

        if (array[middle] === findElement) return middle;
        if (array[middle] > findElement) end = middle;
        if (array[middle] < findElement) start = middle;
    }

    return -1;
};

module.exports = {
    binarySearchRecursion,
    binarySearchLoop,
};
