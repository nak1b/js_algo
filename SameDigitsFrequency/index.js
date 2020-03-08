/*
  Find if two numbers have same number of digits
*/

function sameFrequency(num1, num2) {
  const s1 = num1.toString()
  const s2 = num2.toString()

  const map = {}

  for(let ch of s1) {
    map[ch] = ++map[ch] || 1
  }

  for(let ch of s2) {
    if(!map[ch]) {
      return false
    }
    map[ch]--
  }
  return true
}

module.exports = sameFrequency