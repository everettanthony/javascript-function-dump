let myWord = 'rotator';
let myWord2 = 'Racecar';
let mySentence = 'Eva, can I see bees in a cave?';

function isPalindrome(str) {
  if (str == null || str.length - 1 === 0)
    return false;
  
  let strReversed = str.split('').reverse().join('');
  let newStr = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase();

  for (let i = 0, j = newStr.length - 1; i < j; ++i, --j) {
    console.log( newStr[i] + ' ==== ' + newStr[j]);
    if (newStr.charAt(i) !== newStr.charAt(j)) {
      console.log(false);
      return false;
    }
  }
  
  console.log(true);
  console.log( str + ' <===> ' + strReversed);
  return true;
}

isPalindrome(myWord2);