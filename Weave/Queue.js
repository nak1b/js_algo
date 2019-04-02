/*
  Queue
*/

class Queue {
  constructor() {
    this.data = []
  }

  add(val) {
    this.data.unshift(val)
  }

  remove() {
    return this.data.pop()
  }

  peek() {
    const next = this.data.length - 1
    return this.data[next]
  }
}

module.exports = Queue