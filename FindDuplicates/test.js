const areThereDuplicates = require('./index.js')

describe('Testing FindDuplicates', () => {
  test('areThereDuplicates function is defined', () => {
    expect(typeof areThereDuplicates).toEqual('function')
  })

  test('should return false for input (1, 2, 3)', () => {
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
  })

  test('should return true for input (1, 2, 2)', () => {
    expect(areThereDuplicates(1, 2, 2)).toBeTruthy()
  })

  test('should return true for input ("a", "b", "c", "a")', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy()
  })
})