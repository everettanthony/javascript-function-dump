// Add custom properties to your function
function sayHi() {
    console.log('Hi');

    // let's count how many times we run
    sayHi.counter++;
}

sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi
sayHi(); // Hi

console.log( `Called ${sayHi.counter} times` ); // Called 5 times