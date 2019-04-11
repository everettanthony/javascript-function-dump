// Reverse a string with recursion

let myStr = 'Everett Anthony Bradshaw';

function swap(str, i, j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}

function reverse(str, m, n) {
  if (m < n) {
    swap(str, m, n);
	reverse(str, m + 1, n - 1);
  }
  
  return str.join('');
}

let strArr = myStr.split('');
console.log(reverse(strArr, 0, strArr.length - 1));

// Shorter approach
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}