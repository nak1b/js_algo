const isSubsequence = require('./index')

describe('Testing isSubsequence', () => {
  const tests = [
    {str1: 'hello', str2: 'hello world', result: true},
    {str1: 'sing', str2: 'sting', result: true},
    {str1: 'abc', str2: 'abracadabra', result: true},
    {str1: 'abc', str2: 'acb', result: false},
  ]

  tests.forEach(({str1, str2, result}) => {
    it(`${str1}, ${str2} -> ${result}`, () => {
      return expect(isSubsequence(str1, str2, result)).toEqual(result)
    })
  })
})