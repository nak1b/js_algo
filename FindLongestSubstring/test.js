const findLongestSubstring = require('./index')

describe('Testing findLongestSubstring', () => {
  const tests = [
    {s: '', result: 0},
    {s: 'rithmschool', result: 7},
    {s: 'thisisawesome', result: 6},
    {s: 'thecatinthehat', result: 7},
    {s: 'bbbbbb', result: 1},
    {s: 'longestsubstring', result: 8},
    {s: 'thisishowwedoit', result: 6},
  ]

  tests.forEach(({s, result}) => {
    it(`${s} -> ${result}`, () => {
      expect(findLongestSubstring(s)).toEqual(result)
    })
  })
})