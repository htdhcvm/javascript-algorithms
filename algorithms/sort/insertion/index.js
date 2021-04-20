const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let indexPrev = i - 1;

        while ((indexPrev >= 0) & (array[indexPrev] > key)) {
            array[indexPrev + 1] = array[indexPrev];
            indexPrev -= 1;
        }

        array[indexPrev + 1] = key;
    }

    return [...array];
};

module.exports = insertionSort;
