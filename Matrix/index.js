/*
  Matrix
*/

function matrix(n) {
  const results = []

  for(let i=0; i<n; i++) {
    results.push([])
  }

  let counter = 1
  let start_col = 0
  let end_col = n - 1
  let start_row = 0
  let end_row = n - 1


  while(start_col <= end_col && start_row <= end_row) {
    //top side
    for(let i=start_col; i<=end_col; i++) {
      results[start_row][i] = counter
      counter++
    }
    start_row++

    //right side
    for(let i=start_row; i<=end_row; i++) {
      results[i][end_col] = counter
      counter++
    }
    end_col--

    //bottom side
    for(let i=end_col; i>=start_col; i--) {
      results[end_row][i] = counter
      counter++
    }
    end_row--

    //left side
    for(let i=end_row; i>=start_row; i--) {
      results[i][start_col] = counter
      counter++
    }
    start_col++
  }

  return results
}

module.exports = matrix