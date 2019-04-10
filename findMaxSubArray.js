// From a given array, find the largest sub-array containing consecutive integers

var myArr = [1,2,3,9,10,11,12,13,14,15,16,17,18,19,20];

function isConsecutive(arr, i, j, min, max) {
  if (max - min != j - i) {
    return false;
  }
  
  var visited = [];
  visited = arr[j - i + 1];
  
  for (let k = i; k <= j; k++) {
    if (visited[arr[k] - min]) {
      return false;
    }

    visited[arr[k] - min] = true;
  }
  return true;
}

function findMaxSubArray(arr) {
  var len = 1;
  var start = 0, end = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    let min_val = arr[i], max_val = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      min_val = Math.min(min_val, arr[j]);
      max_val = Math.max(max_val, arr[j]);

      if (isConsecutive(arr, i, j, min_val, max_val)) {
        if (len < max_val - min_val + 1) {
          len = max_val - min_val + 1;
          start = i;
          end = j;
        }
      }
    }
  }
  
  console.log('The largest sub-array is [' + start + ', ' + end + ']');
}

findMaxSubArray(myArr);
/* From the given array, the largest sub-array containing consecutive integers is listed below: 
   [9,10,11,12,13,14,15,16,17,18,19,20] ====> myArr[3] to myArr[14]
   The largest sub-array is [3, 14]
*/