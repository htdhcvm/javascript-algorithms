# Binary search

**Problem**: search element x in array. It works only sort array.

**Binary search** - search sorted array dividing the search interval half. Begin with interval covering whole array, if element in the middle array less the value of the search key, narrow interval ( middle element to end ). Otherwise narrow it ( start to middle element ).

![binary-search](https://github.com/htdhcvm/javascript-algorithms/blob/master/assets/binary-search/Binary-Search.png)

**Time complexity** binary search is
`O(log n)`
or
`T(n) = T( n / 2 ) + C`
