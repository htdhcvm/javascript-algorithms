const jumpSearch = (array, findElement, jumpSize) => {
    let prev = 0;


    if(array[array.length - 1] === findElement) 
        return array.length - 1


    while(array.length >= prev) {
        if(array[prev] === undefined)
            prev = array.length - 1

        if(array[prev] >= findElement) {
            for(let start = prev - jumpSize; start < array.length; start++) {
                if(array[start] === findElement)
                    return start;
            }
        }

        prev += jumpSize - 1;
    }

    if(array[array.length - 1] > findElement) {
        for(let start = prev - jumpSize; start < array.length; start++) {
            if(array[start] === findElement)
                return start;
        }
    }

    return -1
}

module.exports = jumpSearch;