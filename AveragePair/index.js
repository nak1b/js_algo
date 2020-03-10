/*
  Multiple Pointers - Find Average Pair
*/

function averagePair(arr, avg) {
  let start = 0
  let end = arr.length - 1

  while(start < end) {
    const tempAvg = (arr[start] + arr[end]) / 2

    if(tempAvg === avg) { return true }

    if(tempAvg > avg) { 
      end--
      continue
    } 

    if(tempAvg < avg) {
      start++
      continue
    }
  }

  return false
}

module.exports = averagePair