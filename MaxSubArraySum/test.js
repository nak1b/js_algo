const maxSubArraySum = require('./index');

test('maxSubArraySum function is defined', () => {
  expect(typeof maxSubArraySum).toEqual('function');
});

test('should return maxSubArraySum to be null', () => {
  expect(maxSubArraySum([], 3)).toEqual(null);
});

test('should return max sum to be 10', () => {
  expect(maxSubArraySum([2, 10, 4, 3, 1], 1)).toEqual(10);
});

test('should return max sum to be 17', () => {
  expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
});

test('should return number of unique number to be 7', () => {
  expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
});