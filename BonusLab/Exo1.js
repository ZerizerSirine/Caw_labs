//
[v1, v2] = [v2, v1];
//
const combined = numbers.concat(letters, foods);
//
const str = "hello";
const chars = [...str];  // ["h", "e", "l", "l", "o"]

//a) fn(1, 2, 3, 'A', 'B', 'C')
//args will contain: [3, 'A', 'B', 'C'] (everything after the first two parameters).

//b) fn(1, 2)
//args will be an empty array: [] (no extra parameters passed).

//c) let x = ['a', 'b', 'c', 'd']; fn(...x)
//args will contain: ['c', 'd'] (everything after the first two parameters a and b).