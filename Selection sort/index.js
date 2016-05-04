// input array
var numbers = [5, 1, 12, -5, 16, 2, 12, 14]

var selectionSortArray = selectionSort(numbers)
console.log('selectionSortArray ', selectionSortArray)


/**
 * @param {Array} numbers
 * @return {Array} numbers // sorted array
 */

function selectionSort(numbers) {
  for (var i = 0; i < numbers.length - 1; i++) {
    var idx = i

    for (var j = i + 1; j < numbers.length; j++) {
      // if next element less than previous, set as index
      if (numbers[j] < numbers[idx]) {
        idx = j
      }
    }


    var smallerNumber = numbers[idx]
    numbers[idx] = numbers[i]
    numbers[i] = smallerNumber

  }
  return numbers
}
