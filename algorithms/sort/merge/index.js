const mergeSort = (array, left, right) => {
    if (left >= right) return;

    const middle = Math.floor(left + (right - left) / 2);

    mergeSort(array, left, middle);
    mergeSort(array, middle + 1, right);
    merge(array, left, middle, right);
};

const merge = (array, left, middle, right) => {
    let sizeFirstArray = middle - left + 1;
    let sizeSecondArray = right - middle;

    let leftSubArray = array.slice(left, middle + 1);
    let rightSubArray = array.slice(middle + 1, right + 1);

    let i = 0;
    let j = 0;

    let k = left;
    while ((i < sizeFirstArray) & (j < sizeSecondArray)) {
        if (leftSubArray[i] <= rightSubArray[j]) {
            array[k] = leftSubArray[i];
            i++;
        } else {
            array[k] = rightSubArray[j];
            j++;
        }
        k++;
    }

    while (i < sizeFirstArray) {
        array[k] = leftSubArray[i];
        i++;
        k++;
    }

    while (j < sizeSecondArray) {
        array[k] = rightSubArray[j];
        j++;
        k++;
    }
};

module.exports = mergeSort;
