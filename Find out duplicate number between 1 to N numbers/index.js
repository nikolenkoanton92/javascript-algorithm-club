// input array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8]

var duplicateNumber = findDuplicateNumber(numbers)

console.log('duplicateNumber ', duplicateNumber) // duplicateNumber is 8


/**
 * find duplication number in array
 * @param  {Array} numbers
 * @return {Number} duplicate // duplicate number
 */
function findDuplicateNumber(numbers) {
  var highestNumber = numbers.length - 1
  var total = getSum(numbers)
  var duplicate = total - (highestNumber * (highestNumber + 1) / 2)

  return duplicate
}

/**
 * return sum of all elements in array
 * @param {Array} numbers
 * @param {Number} sum // sum of all elements in array
 */

function getSum(numbers) {
  var sum = 0
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}
