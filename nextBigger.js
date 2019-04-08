function nextBigger(n){
  var digit = n.toString().split('');
  
  // Find the pivot point from the right where i > i-1
  var pivotPoint = -1;
  for (var i = digit.length-1; i > 0; i--) {
    console.log(digit[i] +'===='+ digit[i-1]);
    console.log( digit[i] );
    
    if (+digit[i] > +digit[i-1]) {
      pivotPoint = i-1;
      break;
    }
  }
  
  // If no pivot point, return pivot point value of -1
  if (pivotPoint == -1) return pivotPoint;
  
  console.log('Pivot Point: ' + pivotPoint);
    
  // Return numbers to the right of the pivot point
  var right = digit.splice(pivotPoint);
  
  console.log('Pivot Point and Numbers to the Right: ' + right);
  
  // Remove the pivot number from original digit
  var pivot = right.splice(0, 1)[0];
  console.log('Pivot Number: ' + pivot);
  console.log('New Right minus Pivot Number: ' + right);
  
  // Find lowest number and lowest number index > pivot number
  var lowestNum = null, lowestNumIdx = null;
  for (var j = 0; j < right.length; j++) {
    if (right[j] > pivot) {
      if (lowestNum == null || right[j] < lowestNum) {
        lowestNum = right[j];
        lowestNumIdx = j;
      }
    }
  }
  
  console.log('Lowest Number > Pivot: ' + lowestNum); 
  console.log('Lowest Number Index > Pivot: ' + lowestNumIdx);
  
  if (lowestNumIdx == null) return -1;

  right.splice(lowestNumIdx, 1);
  console.log('New Right minus (Lowest Number > Pivot): ' + right);
  right.push(pivot);
  console.log('New Right with Pivot Number Added to End: ' + right);
  right = right.sort();
  console.log('New Right Sorted (lowest to highest): ' + right);
  
  // Connect the Left + Pivot Number + New Right
  var newDigit = +digit.concat([lowestNum]).concat(right).join('');
  if (newDigit < n) return -1;
   
  console.log('Left(' + digit + ') + Lowest Number Greater Than Pivot(' + lowestNum + ') + New Right(' + right + '): ' + newDigit); 
  console.log('Final Value: ' + newDigit);
  return newDigit;
}

console.log(nextBigger(123765));