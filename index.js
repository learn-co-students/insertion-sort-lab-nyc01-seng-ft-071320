function findMinAndRemove(array) {
  console.log(array);
  let min = { index: 0, value: array[0] };
  for (let i = 0; i < array.length; i++) {
    if (min["value"] > array[i]) {
      min["index"] = i;
      min["value"] = array[i];
    }
  }
  let minValue = min["value"];
  array.splice(min["index"], 1);
  return minValue;
}

function selectionSort(array) {
  let sorted = [];
  let count = array.length;
  while (count >= 1) {
    console.log("Here ", array);
    sorted.push(findMinAndRemove(array));
    count--;
  }
  return sorted;
}

console.log(selectionSort([2, 1, 8, 3, -1, 4, 7]));
