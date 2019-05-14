// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/**
 * Bubble the largest item to the end of the array while crawling the array
 * by swapping neighbors
 * O(n^2)
 * @param {[Number]} arr 
 */
function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }

  return arr
}

/**
 * Sort by swapping next-least element with index while crawling the array
 * "Prove me wrong"
 * 
 * O(n^2)
 * @param {[Number]} arr 
 */
function selectionSort (arr) {
  // crawl array
  for (let i = 0; i < arr.length; i++) {

    // set minimum value
    let indexOfMin = i

    for (let j = i + 1; j < arr.length; j++) {
      // search for a lower value
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }

    // swap lowest value and index
    let lesser = arr[indexOfMin]
    arr[indexOfMin] = arr[i]
    arr[i] = lesser
  }

  return arr
}

// my solution
function mergeSort (arr) {
  // boundary condition, return the array if it can't be subdivided
  if (arr.length === 1) {
    return arr
  }

  // split array in half, if possible
  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  // merge two arrays, subdividing as necessary
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * Merge two sorted arrays by iteratively adding the lower element from two arrays to an output array
 * 
 * O(n log(n))
 * @param {[Number]} left 
 * @param {[Number]} right 
 */
function merge (left, right) {
  const results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
