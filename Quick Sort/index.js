// input array
var numbers = [3, 7, 8, 5, 2, 1, 9, 5, 4]

var sortedArray = sort(numbers)
console.log('newArray ', newArray)

/**
 * @param {Array} numbers // input array
 * @param {return} array // should return sorted array
 */

function sort(numbers) {
  if (numbers === null || numbers.length === 0) {
    return
  }

  var length = numbers.length
  return quickSort(numbers, 0, length - 1)
}

function quickSort(numbers, lowerIdx, higherIdx) {
  var i = lowerIdx
  var j = higherIdx
  // calculate pivot number, We take pivot as middle index number
  var pivot = numbers[lowerIdx + Math.floor((higherIdx - lowerIdx) / 2)];

  while (i <= j) {
    while (numbers[i] < pivot) {
      i++
    }

    while (numbers[j] > pivot) {
      j--
    }

    if (i <= j) {
      exchangeNumbers(numbers, i, j)

      i++
      j--
    }
  }

  if (lowerIdx < j) {
    quickSort(numbers, lowerIdx, j)
  }

  if (i < higherIdx) {
    quickSort(numbers, i, higherIdx)
  }

  return numbers
}

/**
 * exchange elements of array
 * @param {Array} array
 * @param {Number} i // index of the first item to be swapped
 * @param {Number} j // index of the second item to be swapped
 */

function exchangeNumbers(array, i, j) {
  var tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

