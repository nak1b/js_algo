const sameFrequency = require('./index.js')

describe('Testing sameFrequency', () => {
  test('sameFrequency function is defined', () => {
    expect(typeof sameFrequency).toEqual('function')
  })

  test('should return true for num1=182 and num2=281', () => {
    expect(sameFrequency(182, 281)).toBeTruthy()
  })

  test('should return false for num1=34 and num2=14', () => {
    expect(sameFrequency(34, 14)).toBeFalsy()
  })

  test('should return true for num1=3589578 and num2=5879385', () => {
    expect(sameFrequency(3589578, 5879385)).toBeTruthy()
  })

  test('should return false for num1=22 and num2=222', () => {
    expect(sameFrequency(22, 222)).toBeFalsy()
  })
})
