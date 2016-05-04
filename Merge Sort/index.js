// input array
var numbers = [38, 27, 43, 3, 9, 82, 10]
var sortedArray = sort(numbers)

console.log('sortedArray ', sortedArray)

function sort(numbers) {
  var length = numbers.length

  return mergeSort(numbers, 0, length - 1)
}

function mergeSort(numbers, lowerIdx, higherIdx) {
  if (lowerIdx < higherIdx) {
    var middle = lowerIdx + Math.floor((higherIdx - lowerIdx) / 2)
    // below step sorts the left side of the array
    mergeSort(numbers, lowerIdx, middle)
    // below step sorts the right side of the array
    mergeSort(numbers, middle + 1, higherIdx)
    // now merge both side
    return mergeParts(numbers, lowerIdx, middle, higherIdx)
  }
}

function mergeParts(numbers, lowerIdx, middle, higherIdx) {

  var tempMergeArray = []

  for (var i = lowerIdx; i <= higherIdx; i++) {
    tempMergeArray[i] = numbers[i]
  }

  var i = lowerIdx
  var j = middle + 1
  var k = lowerIdx

  while (i <= middle && j <= higherIdx) {
    if (tempMergeArray[i] <= tempMergeArray[j]) {
      numbers[k] = tempMergeArray[i];
      i++
    } else {
      numbers[j] = tempMergeArray[j];
      j++
    }
    k++
  }

  while (i <= middle) {
    numbers[k] = tempMergeArray[i];
    k++
    i++
  }

  return numbers
}
