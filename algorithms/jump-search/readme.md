# Jump search

**Jump search** - is a search algorithm for sorted array. Basic idea is ckecks fewer elements then linear search, jumping ahead on fixed steps or skipping some elements insted searching all. 

**Example** : we have a array [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610] and will find element 55. it is length 16. Block jump is 4: 
- Jump from index 0 to index 4;
- Jump from index 4 to index 8;
- Jump from index 8 to index 12;
- Since element at index 12 grather than 55, we will jump back to 8 index.
- Perform liner search from index 8.


**Time complexity**
- Best case is when size block for jump sqrt(n) ***O(sqrt(n))***.
- Worth case is when comparison count ( ( m / n ) + m -1) ***O(n)*** 