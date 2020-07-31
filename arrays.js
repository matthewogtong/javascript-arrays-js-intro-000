var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var secondArray = [element, ...array]
  return secondArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element)
  return array
}
