const averagePair = require('./index')

describe('Testing averagePair', () => {
  const tests = [
    {arr: [], avg: 2, result: false},
    {arr: [1, 2, 3], avg: 2.5, result: true},
    {arr: [1, 3, 4, 5, 6, 7, 10, 12, 19], avg: 8, result: true},
    {arr: [1, 3, 4, 5, 6, 7, 10, 12, 19], avg: 4.1, result: false}
  ]

  tests.forEach(({arr, avg, result}) => {
    it(`[${arr}], ${avg} -> ${result}`, () => {
      expect(averagePair(arr, avg)).toEqual(result);
    })
  })
})