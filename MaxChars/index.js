/*
  Max Chars
*/

function maxChars(s) {
  const map = {}

  for(let ch of s) {
    const count = map[ch] === undefined ? 1 : map[ch] + 1
    map[ch] = count
  }

  let maxCount = 0
  let maxChar = ''

  for(i in map) {
    const count = map[i]
    if(count > maxCount) {
      maxCount = count
      maxChar = i
    }
  }
  return maxChar
}

module.exports = maxChars