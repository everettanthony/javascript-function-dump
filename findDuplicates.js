const arr = ['a', 'b', 'b', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'g', 'g', 'g']; 

function findDuplicates(arr) {
  const arrSorted = arr.slice().sort(); 
  const duplicates = [];
  
  // Identify duplicate values
  for (let i = 0; i < arr.length -1; i++) {
    if (arrSorted[i + 1] === arrSorted[i]) {
      duplicates.push(arrSorted[i]);
    }
  }
  
  // Remove duplicate values
  const arrFiltered = arr.filter(function(ele, pos) {
     return arr.indexOf(ele) === pos;
  }); 
  
  return arrFiltered;
}

console.log(findDuplicates(arr)); 