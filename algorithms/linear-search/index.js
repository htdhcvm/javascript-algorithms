
const linearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            return i
        }
    }

    return -1;
}

module.exports = linearSearch;