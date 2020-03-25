const minSubArrayLen = require('./index')

describe('Testing minSubArrayLen', () => {
  const tests = [
    {arr: [2,3,1,2,4,3], n: 7, result: 2},
    {arr: [2,1,6,5,4], n: 9, result: 2},
    {arr: [3,1,7,11,2,9,8,21,62,33,19], n: 52, result: 1},
    {arr: [1,4,16,22,5,7,8,9,10], n: 39, result: 3},
    {arr: [1,4,16,22,5,7,8,9,10], n: 55, result: 5},
    {arr: [4,3,3,8,1,2,3], n: 11, result: 2},
    {arr: [1,4,16,22,5,7,8,9,10], n: 95, result: 0}
  ]

  tests.forEach(({arr, n, result}) => {
    it(`[${arr}], ${n} -> ${result}`, () => {
      expect(minSubArrayLen(arr, n)).toEqual(result)
    })
  })
})