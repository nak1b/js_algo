/*
  minSubArrayLen
*/

function minSubArrayLen(arr, n) {
  const l = arr.length
  let minLen = Infinity
  let total = 0
  let start = 0
  let end = 0

  while(start < l) {
    if(total < n && end < l) {
      total = total + arr[end]
      end++
    } else if(total >= n) {
      minLen = Math.min(minLen, end - start)
      total = total - arr[start]
      start++
    } else {
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
}

module.exports = minSubArrayLen