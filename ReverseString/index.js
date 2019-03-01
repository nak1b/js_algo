/*
  Reverse String
*/

function reverse(str) {
  let rev_s = ''

  for(let ch of str) {
    rev_s = ch + rev_s
  }
  return rev_s
}

module.exports = reverse