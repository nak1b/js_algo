/*
  Reverse Int
*/

function reverseInt(n) {
  const strInt = n.toString()
  let reversedStr = ''

  for(let ch of strInt) {
    if(ch === '-') continue 
    reversedStr = ch + reversedStr
  }

  return parseInt(reversedStr) * Math.sign(n)
}

module.exports = reverseInt