/*
  Find Unique Numbers in Array
*/

function findUniqueNumbers(arr) {
  const l = arr.length
  let i = 0

  if(l === 0) { return 0 }
  
  for(let j = 1; j<l; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

module.exports = findUniqueNumbers