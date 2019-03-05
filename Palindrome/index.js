/*
  Palindrome String
*/

function palindrome(s) {
  const l = s.length
  
  for(let i=0; i<l/2; i++) {
    if(s[i] !== s[l - i - 1]) {
      return false 
    }
  }
  return true
}

module.exports = palindrome