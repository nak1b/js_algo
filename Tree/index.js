/*
  Tree
*/

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    const node = new Node(data)
    this.children.push(node)
  }

  remove(data) {
    this.children = this.children.filter(i => i.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    if(!this.root) { return }

    const arr = [this.root]
    while(arr.length > 0) {
      const el = arr.shift()
      arr.push(...el.children)
      fn(el)
    }
  }

  traverseDF(fn) {
    if(!this.root) { return }

    const arr = [this.root]
    while(arr.length > 0) {
      let el = arr.shift()
      arr.unshift(...el.children)
      fn(el)
    }
  }
}

module.exports = {
  Node,
  Tree
}