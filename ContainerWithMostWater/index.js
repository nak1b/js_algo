/*
  Find Container with Most Water
*/

function findContainerWithMostWater(arr) {
  const l = arr.length
  let maxArea = 0

  let startIndex = 0
  let endIndex = l - 1

  while(startIndex < endIndex) {
    const leftItem = arr[startIndex]
    const rightItem = arr[endIndex]
    const height = Math.min(leftItem, rightItem)
    const width = endIndex - startIndex
    const area = height * width
    maxArea = Math.max(maxArea, area)

    if(leftItem < rightItem) {
      startIndex++
    } else {
      endIndex--
    }
  }

  return maxArea
}

module.exports = findContainerWithMostWater