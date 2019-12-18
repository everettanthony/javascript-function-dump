// Find the maximum sum of a given amount of array elements using window slide technique
function maxSum(arr, n, k) { 
    // n must be greater 
    if (n < k) { 
        console.log('Invalid'); 
        return -1; 
    } 

    // Compute sum of first window of size k 
    let maxSum = 0; 

    for (let i = 0; i < k; i++) {
        maxSum += arr[i]; 
    }

    /* 
       Compute sums of remaining windows by 
       removing first element of previous 
       window and adding last element of 
       current window. 
    */
    let windowSum = maxSum; 

    for (let i = k; i < n; i++) { 
        windowSum += arr[i] - arr[i - k]; 
        maxSum = Math.max(maxSum, windowSum); 
    } 

    return maxSum; 
} 

const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const len = arr.length;
const k = 4;

console.log( maxSum(arr, len, k) );