# JavaScript Algorithms and Data Structures

## Data structures

## Algorithms

-   Searches

    -   [x] [Linear search](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/search/linear)
    -   [x] [Binary search](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/search/binary)
    -   [x] [Jump search](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/search/binary)
    -   [x] [Interpolation search](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/search/interpolation)
    -   [x] [Exponential search](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/search/exponential)

-   Sorts

    -   [x] [Selection sort](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/sort/selection)
    -   [x] [Bubble sort](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/sort/bubble)
    -   [x] [Insertion sort](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/sort/insertion)
    -   [ ] Heap sort
    -   [x] [Merge sort](https://github.com/htdhcvm/javascript-algorithms/tree/master/algorithms/sort/merge)
    -   [ ] Quicksort
    -   [ ] Shellsort
    -   [ ] Counting sort

## Useful information

![График роста O](https://github.com/htdhcvm/javascript-algorithms/blob/master/assets/graphO.png)
![Определения](https://github.com/htdhcvm/javascript-algorithms/blob/master/assets/designations.png)
![Временная сложность структур данных](https://github.com/htdhcvm/javascript-algorithms/blob/master/assets/structuredata.png)
![Временная сложность сортировок с массивами](https://github.com/htdhcvm/javascript-algorithms/blob/master/assets/sorts.png)

## Time complexity for Array methods

| Name    | Time complexity | Description                                                                                                      |
| ------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| push    | 0(1)            | Add a new element to the end of the array                                                                        |
| pop     | 0(1)            | Delete the last element of the array                                                                             |
| shift   | 0(n)            | Delete the first element of the array                                                                            |
| unshift | 0(n)            | Add one or more elements in the beginning of the array                                                           |
| splice  | 0(n)            | Remove, add or replace a new element indicate by index                                                           |
| sort    | 0(n log(n))     | Modify the array, ordered by a compare Function                                                                  |
| concat  | 0(n)            | Create a new array with the union of two or more arrays                                                          |
| slice   | 0(n)            | Return a copy of a sub array between two index, start and end                                                    |
| indexOf | 0(n)            | Return the first index of the element that exists in the array, and if not exists return-1                       |
| forEach | 0(n)            | just execute a function for each element in the array                                                            |
| map     | 0(n)            | Create a new array with the result of the callback function                                                      |
| filter  | 0(n)            | Create a new array with the elements that apply the given filter condition as true                               |
| reduce  | 0(n)            | Return a single value after applying the reduction function for each element                                     |
| some    | 0(n)            | Return a boolean value as true if found one or more item that apply the given condition, and return false if not |
| every   | 0(n)            | This function Return a boolean value as true if all the items apply the given condition, and false if not        |
