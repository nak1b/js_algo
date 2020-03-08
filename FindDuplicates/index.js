/*
  Find if there are duplicates
*/

// Time O(n),  Space O(n)
function areThereDuplicates(...args) {
  const map = {}

  for(let i of args) {
    if(map[i]) {
      return true
    }
    map[i] = ++map[i] || 1
  }
  return false
}


// Time O(nlogn),  Space O(1)
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

module.exports = areThereDuplicates