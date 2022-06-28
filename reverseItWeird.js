const myString = 'hello world';

function reverseItWeird(str) {
  return str
    .split('')
    .reverse()
    .join('')
    .replace(/(.)(.)/g, '$2$1')
  ;
}

console.log(reverseItWeird(myString));