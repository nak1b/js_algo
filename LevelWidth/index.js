/*
  Level Width
*/

function levelWidth(root) {
  if(!root) { return [] }
  const END = 'END'

  const result = []
  const arr = [root, END]

  let counter = 0

  while(arr.length > 0) {
    const el = arr.shift()
    if(el === END) { 
      result.push(counter)
      counter = 0
      if(arr.length !== 0) {
        arr.push(END)
      } 
      continue
    }
    counter += 1
    arr.push(...el.children)
  }
  return result
}

module.exports = levelWidth