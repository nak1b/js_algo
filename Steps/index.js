/*
  Steps 
*/

function steps2(n) {
  for(let i=0; i<n; i++) {
    let str = ''
    for(let j=0; j<n; j++) {
      str += (i >= j) ? '#' : ' '
    }
    console.log(str)
  }
}

function steps(n, row=0, str='') {
  if(n === row) { return }

  if(str.length === n) {
    console.log(str)
    return steps(n, row+1)
  }

  if(str.length <= row) {
    str += '#'
  } else {
    str += ' '
  }
  return steps(n, row, str)
}

module.exports = steps