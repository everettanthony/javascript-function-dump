var myArr = [9, 9, 9, 111, 817, 2, 3, 4, 4, 5, 7, 817];

function removeDuplicatesAndSort(arr) {
  const dupes = {};
  const results = arr.filter(function(el) {
    return dupes.hasOwnProperty(el) ? false : (dupes[el] = true);
  });
  
  return results.sort((a, b) => a - b);
}

console.log(removeDuplicatesAndSort(myArr));