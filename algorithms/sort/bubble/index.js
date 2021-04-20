const bubblesort = (array) => {
    let swapped = false;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return [...array];
};

const swap = (array, indexStart, indexSwap) => {
    let tmp = array[indexStart];
    array[indexStart] = array[indexSwap];
    array[indexSwap] = tmp;
};
module.exports = bubblesort;
