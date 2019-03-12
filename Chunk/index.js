/*
  Chunk
*/

function chunk2(arr, size) {
  let result = []

  while(arr.length > 0) {
    const subArr = arr.splice(0, size)
    result.push(subArr)
  }
  return result
}

function chunk(arr, size) {
  const l = arr.length
  let result = []
  let subArr = []

  for(let i=0; i<l; i++) {
    subArr.push(arr[i])
    
    if(subArr.length === size || i === l - 1 ) {
      result.push(subArr)
      subArr = []
    }
  }

  if(subArr.length > 0) {
    result.push(subArr)
  }

  return result
}

module.exports = chunk