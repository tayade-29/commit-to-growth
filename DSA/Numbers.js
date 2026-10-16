/**

Question 1: Number CRUD
Easy

Write a JavaScript function that performs four operations on a positive integer.
Given:
num = 5832
Implement these requirements:
1. Read: Return the digit at a given position, counting from the right, starting at position 1.
2. Update: Replace the digit at a given position with a new digit.
3. Insert: Insert a new digit at a given position.
4. Delete: Remove the digit at a given position.

Example expectations:
- Read position 2 from 5832 → 3
- Update position 2 to 9 → 5892
- Insert digit 7 at position 2 → 58732
- Delete position 2 → 582

For insertion, position 1 means inserting before the rightmost digit. For deletion, remove the digit at that position.
Rules:
- Try solving using arithmetic and loops.
- Don't convert the number to a string or use array methods.
- Assume the input is a positive integer and the position is valid.
- Write separate functions for each operation.

 */

//Task1
let num=2098;

function read (n){
    for(let i=0;i<num.toString().length ;i++){
        if (i===n){
            return num.toString()[i];
        }
    } 
}
console.log(read(2));

//Task2
function replace(n,p){
   return num.toString().replace(n,p);
    
}

console.log(replace(2,7));

//