// input arrays
var numbers = [5, 1, 12, -5, 16]


var sortedArray = bubleSort(numbers)
console.log('sortedArray ', sortedArray)

/**
 * implementation of Buble Sort
 * @param {Array} numbers
 * @return {Array} numbers // sorted array
 */

function bubleSort(numbers) {
  var n = numbers.length
  var k

  for (var m = n; m >= 0; m--) {
    for (var i = 0; i < n - 1; i++) {
      k = i + 1
      if (numbers[i] > numbers[k]) {
        swapNumbers(i, k, numbers)
      }
    }
  }
  return numbers
}

/**
 * swap two numbers if needed
 * @param {Number} i
 * @param {Number} j
 * @param {Array} numbers
 */

function swapNumbers(i, j, numbers) {
  var tmp = numbers[i]
  numbers[i] = numbers[j]
  numbers[j] = tmp
}
