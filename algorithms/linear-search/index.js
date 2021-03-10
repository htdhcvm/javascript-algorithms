
const linearSearch = (arr, n) => {
    let tmp = [];

    arr.forEach( (item, index) => {
        if(item === n) tmp.push(index)
    })

    return (tmp.length > 0) 
        ? tmp
        : [-1]
}

module.exports = linearSearch;