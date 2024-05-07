// Use arr.filter(f) to filter all elements through the function f. If it returns true, then that element is returned in the resulting array.

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( arr.filter(inBetween(5, 9)) );


  