/*
  Weave
*/

const Queue = require('./Queue')

function weave(sourceA, sourceB) {
  const result = new Queue()
  while(sourceA.peek() || sourceB.peek()) {
    if(sourceA.peek()) {
      result.add(sourceA.remove())
    }
    if(sourceB.peek()) {
      result.add(sourceB.remove())
    }
  }
  return result
}

module.exports = weave