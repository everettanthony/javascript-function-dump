const myArr = [5, 25, 7, 895, 6, 9, 114, 10];

// Given an array, find all pairs with a given sum
function findPair(arr, sum) {
  var myMap = new Map();
   
  for(let i = 0; i < arr.length; i++) {
    if(myMap.has(sum - arr[i])) {
      console.log(`Pair found at index: ${myMap.get(sum - arr[i])} and ${i}`);
      console.log(`${arr[myMap.get(sum - arr[i])]} + ${arr[i]} = ${sum}`);
    }
    myMap.set(arr[i], i);
  }
  return 'No more pairs found.';
}

console.log( findPair(myArr, 15) );