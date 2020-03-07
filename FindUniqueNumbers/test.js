const findUniqueNumbers = require('./index');

test('findUniqueNumbers function is defined', () => {
  expect(typeof findUniqueNumbers).toEqual('function');
});

test('should return number of unique number to be 0', () => {
  expect(findUniqueNumbers([])).toEqual(0);
});

test('should return number of unique number to be 1', () => {
  expect(findUniqueNumbers([2])).toEqual(1);
});

test('should return number of unique number to be 4', () => {
  expect(findUniqueNumbers([2, 3, 4, 4, 4, 7])).toEqual(4);
});

test('should return number of unique number to be 7', () => {
  expect(findUniqueNumbers([1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7])).toEqual(7);
});