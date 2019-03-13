/*
  Find Vowels
*/

function vowels1(str) {
  const map = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u'
  }

  let count = 0

  for(c of str.toLowerCase()) {
    count += map[c] ? 1 : 0
  }

  return count
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi) 
  return matches ? matches.length : 0
}

module.exports = vowels