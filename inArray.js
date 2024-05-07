// Use arr.filter(f) to filter all elements through the function f. If it returns true, then that element is returned in the resulting array.

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( arr.filter(inArray([2, 7, 9, 23])) );

