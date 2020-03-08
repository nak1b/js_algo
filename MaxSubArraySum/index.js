/*
  Find Unique Numbers in Array
*/

function maxSubArraySum(arr, n) {
  const l = arr.length

  if(n > l) { return null }

  let max = 0
  let tmpMax = 0

  for(let i=0; i<n; i++) {
    max += arr[i]
  }
  tmpMax = max 

  for(let j=n; j<l; j++) {
    tmpMax = tmpMax - arr[j-n] + arr[j]
    max = Math.max(max, tmpMax)
  }

  return max
}

module.exports = maxSubArraySum