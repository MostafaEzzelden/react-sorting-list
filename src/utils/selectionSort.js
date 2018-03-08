/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, 
and swap elements so that smallest element is at the beginning of unsorted subarray.
*/
const selectionSort = function (array, comparator) {
  comparator = comparator || defaultComparator;
  array.forEach(function(element, index) {
    // for each position, find index of minimum value in subarray starting at that positions
    let minValue = element;
    let minIndex = index;
    for (let i = index; i<array.length; i++) {
      if (comparator(array[i], minValue) < 0)
        {
          minValue = array[i];
          minIndex = i;
        }
    }
    // swap values at min index and current position
    array = swap(array, index, minIndex);
  });
  return array;
};

function swap (arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function defaultComparator(a,b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
};

export default selectionSort
