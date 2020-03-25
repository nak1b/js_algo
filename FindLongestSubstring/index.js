/*
  findLongestSubstring
*/

function findLongestSubstring(str) {
  const l = str.length
  let start = 0
  let end = 0
  let subStr = []
  let max = 0

  while(start < l && end <l) {
    const ch = str[end]
    const chExist = subStr.indexOf(ch) !== -1

    if(!chExist) {
      subStr.push(ch)
      end++
    } else {
      max = Math.max(max, end-start)
      subStr.shift()
      start++
    }
    
    if(end === l) {
      max = Math.max(max, end-start)
    }
  }

  return max
}

function findLongestSubstring2(str) {
  const l = str.length
  let longest = 0
  let seen = {}
  let start = 0
 
  for (let i=0; i<l; i++) {
    const char = str[i]
    if(seen[char]) {
      start = Math.max(start, seen[char])
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    seen[char] = i + 1
  }
  return longest
}

module.exports = findLongestSubstring