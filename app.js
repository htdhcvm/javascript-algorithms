const linerSearch = require('./algorithms/linear-search')

console.log(linerSearch([110, 110, 80, 30, 60, 50, 110, 100, 130, 170], 110)); // Output : 6
console.log(linerSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 175)); // Output : -1
console.log(linerSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 30)); // Output : -1
