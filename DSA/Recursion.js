/**
 Recursion means the function calling itself, it has base case adn teh recursive call
 */

// Write a function called printNumbers(n) that prints numbers from 1 to n using recursion.

// function printNumbers(n){
//    if(n===0){
//     return 0;
//    }
//    console.log(n);
//    printNumbers(n-1);
// }
// printNumbers(4);


/**
 Write a recursive function that calculates the sum of all numbers from 1 to n.

For example:
sum(4); // should return 10


Because:
\[
1 + 2 + 3 + 4 = 10
\]
 */

function sum(n){
    if(n==0){
        return 0;
    }
    return sum + sum(n-1)
}
let total =sum(4);
console.log(total);