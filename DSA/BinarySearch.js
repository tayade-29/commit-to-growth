/**
 You have a sorted array:
const arr = [3, 7, 11, 18, 24, 31, 42, 56, 68];


Write binarySearch(arr, target) that returns the target's index or -1 if it isn't found.

Requirements:
- Use left, right, and mid.
- Update the search boundaries correctly.
- Don't use built-in search methods.
Test it with target = 42, then try target = 20.
 */




const arr = [3, 7, 11, 18, 24, 31, 42, 56, 68];

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } 
    else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } 
    else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

console.log(binarySearch(arr, 18)); // 3
console.log(binarySearch(arr, 42)); // 6
console.log(binarySearch(arr, 20)); // -1
console.log(binarySearch([], 10));  // -1
