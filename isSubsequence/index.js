/*
  Multiple Pointers - isSubsequence
*/

function isSubsequence(str1, str2) {
  let strLen = str2.length
  const wordLen = str1.length
  let i = 0  // str1 index
  let j = 0 // str2 index

  while(i < strLen) {
    if(str2[i] === str1[j]) j++
    i++

    if (j === wordLen) return true
  }

  return false
}

module.exports = isSubsequence