//
const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);
//
const double = arr => arr.map(val => val * 2);
//
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const { a, b } = obj.numbers;
//
const add = (a = 10, b = 10) => (a === 0 ? 0 : a) + (b === 0 ? 0 : b);
