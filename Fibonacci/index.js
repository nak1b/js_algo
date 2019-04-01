/*
  Fibonacci
*/


function memoize(fn) {
  const cache = {}
  
  return function(...args) {
    if(cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

// Recursive solution
function fib(n) {
  if(n < 2) {
    return n
  }

  return fib(n-1) + fib(n-2)
}

fib = memoize(fib)


// Itterative solution
function fib2(n) {
  let results = [0, 1]

  for(let i=2; i<=n; i++) {
    const a = results[i-1]
    const b = results[i-2]

    results.push(a+b)
  }
  return results[n]
}


module.exports = fib