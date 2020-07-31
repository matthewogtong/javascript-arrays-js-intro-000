var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var secondArray = [element, ...array]
  return secondArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var secondArray = [...array, element]
  return secondArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  selectedElement = array[index]
  return selectedElement
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
