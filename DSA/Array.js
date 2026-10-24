/**
 Given this array:
let arr = [10, 20, 30, 40, 50];


Write four separate functions:
1. Read — Return the element at a given index.
getElement(arr, 2) → 30
2. Create / Insert — Insert a value at a given index without replacing existing elements.
insertElement(arr, 2, 25) → [10, 20, 25, 30, 40, 50]
3. Update — Replace the element at a given index.
updateElement(arr, 2, 99) → [10, 20, 99, 40, 50]
4. Delete — Remove the element at a given index.
deleteElement(arr, 2) → [10, 20, 40, 50]
Rules:
- Use JavaScript.
- For insert and delete, try solving without splice().
- Return the resulting array for each operation.
- Assume the index is valid.
 */

//Task1
let nums = [10, 20, 30, 40, 50];
const even = nums.filter(nums => nums%2==0);
const even_doubled =even.map(even => even*2);
console.log(even_doubled);

// function getElement(n){
//     return arr[n]
// }
// console.log(getElement(2));

// //Task2
// function insertElement(n,p){
// let i= arr.length -1;
//             for (i; i>= n;i--){
//                 arr[i+1]=arr[i];
//             }
//         arr[n]=p;
//         return arr;
// }
// console.log(insertElement(2,4))

// //Task3
// function updateElement(n,p){
//     arr[n]=p;
//     return arr;
// } 
// console.log(updateElement(2,99));

// //Task4
// function deleteElement(n){
//     let i=n;
//     for(i;i<arr.length;i++){
//         arr[i]=arr[i+1]
//     }
//     return arr;
// }
// console.log(deleteElement(1))