const myArr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

// Given an array of integers, print all sub-arrays with a sum of 0
function printAllSubArrays(arr) {
  for(let i = 0; i < arr.length; i++) {
    let sum = 0;
    
    for(let j = i; j < arr.length; j++) {
      sum += arr[j];
      
      if (sum === 0) {
        console.log( `sub-array index range [${i} .. ${j}] that equals 0` );
      }
    }
  }
  
  return 'No more sub-arrays found.'
}

console.log( printAllSubArrays(myArr) );