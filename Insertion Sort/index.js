// input numbers
var numbers = [34, 23, 12, 45, 9, 1, 24]

var sortedArray = insertionSort(numbers)

console.log('sortedArray ', sortedArray)

function insertionSort(numbers) {
  var length = numbers.length

  for (var i = 0; i < length; i++) {
    var tmp = numbers[i] // copy of the current element
    for (var j = i - 1; j >= 0 && (numbers[j] > tmp); j--) {
      //shift the numbers
      numbers[j + 1] = numbers[j]
    }

    numbers[j + 1] = tmp
  }

  return numbers
}
