
const swap = (array, el_1, el_2) => {
    let tmp = array[el_1];

    array[el_1] = array[el_2];

    array[el_2] = tmp;
}

const selection = (array) => {
    for(let i = 0; i < array.length; i++) {

        let min_index = i;
        for( let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min_index]) {
                min_index = j;
            }
        }
        swap(array, min_index, i)
    }

    return array;
}

module.exports = selection;