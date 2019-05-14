// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* Memoizer */
function memoize (fn) {
  const cache = {}
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

const fib = memoize(slowFib)

function slowFib (n) {
  if (n < 2) { return n }

  return fib(n - 1) + fib(n - 2)
}

/* My memoized function
 Save results from function calls so we don't run the function with the same arguments over and over
 Memoization - return precomputed results */
// function fib (n) {
//   if (n < 2) { return n }

//   if (precomputed[n] == null) {
//     precomputed[n] = fib(n - 1) + fib(n - 2)
//   }

//   return precomputed[n]
// }

/* The real recursive solution - roughly doubles for each new item, exponential time: O(2 ^ n) */
// function fib (n) {
//   if (n < 2) { return n }

//   return fib(n - 1) + fib(n - 2)
// }

/* My Recursive Solution */
// function fib (n) {
//   let sequence = [0, 1]

//   function generateNext (i, last = 1, secondLast = 0) {
//     if (i > n) { return }

//     sequence.push(last + secondLast)
//     i++

//     return generateNext(i, sequence[sequence.length - 1], last)
//   }

//   generateNext(2)

//   return sequence[n]
// }

/* Iterative solution - MUCH FASTER */
// function fib (n) {
//   let sequence = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     const a = sequence[i - 1]
//     const b = sequence[i - 2]
//     sequence.push(a + b)
//   }

//   return sequence[n]
// }

module.exports = fib
