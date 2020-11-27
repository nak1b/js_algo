const findContainerWithMostWater = require('./index');

test('findContainerWithMostWater function is defined', () => {
  expect(typeof findContainerWithMostWater).toEqual('function');
});

test('should return null for empty array', () => {
  expect(findContainerWithMostWater([])).toEqual(0);
});

test('should return null for array with 1 item', () => {
  expect(findContainerWithMostWater([5])).toEqual(0);
});

test('[7, 1, 2, 3, 9] -> 28', () => {
  expect(findContainerWithMostWater([7, 1, 2, 3, 9])).toEqual(28);
});

test('[1, 9, 10, 14, 3, 0] -> 18', () => {
  expect(findContainerWithMostWater([1, 9, 10, 14, 3, 0])).toEqual(18);
});

test('[7, 3, 11, 14, 9] -> 28', () => {
  expect(findContainerWithMostWater([7, 3, 11, 14, 9] )).toEqual(28);
});