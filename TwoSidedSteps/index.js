/*
  Two Sided Steps (Pyramid)
*/


// ```
// pyramid(1)
// '#'

// pyramid(2)
// ' # '
// '###'

// pyramid(3)
// '  #  '
// ' ### '
// '#####'

// pyramid(4)
// '   #   ' 
// '  ###  '
// ' ##### '
// '#######'


function pyramid2(n) {
  const maxCol = (n * 2) - 1
  const mid = Math.floor(maxCol/2)

  for(let row=0; row<n; row++) {
    let str = ''

    for(let col=0; col<maxCol; col++) {
      if(col >= (mid-row) && col <= (mid+row)) {
        str += '#'
      } else {
        str += ' '
      }
    }
    console.log(str)
  }
}

function pyramid(n, row=0, str='') {
  if(n === row) {
    return 
  }

  if(str.length === (n*2 - 1)) {
    console.log(str)
    return pyramid(n, row + 1)
  }

  const mid = Math.floor((n*2 - 1)/2)
  const l = str.length

  if((l >= (mid-row)) && (l <= (mid + row))) {
    str += '#'
  } else {
    str += ' '
  }

  pyramid(n, row, str)
}

module.exports = pyramid