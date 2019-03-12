/*
  Anagrams
*/

function createMap(str) {
  const map = {}

  for(ch of str.replace(/[^\w]/g, "").toLowerCase()) {
    map[ch] = map[ch] === undefined ? 1 : map[ch] + 1
  }
  return map
}

function anagrams(strA, strB) {
  const strAMap = createMap(strA)
  const strBMap = createMap(strB)

  for(ch in strBMap) {
    const numOfChInA = strAMap[ch]
    const numOfChInB = strBMap[ch]

    if(numOfChInA === undefined || numOfChInA !== numOfChInB) {
      return false
    } 
  }
  return true
}

module.exports = anagrams
