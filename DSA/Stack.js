/**
 Challenge 1 — Implement a Stack
Easy
Given this starting array:
let stack = [];


Implement these four functions using an array:
1. pushStack(stack, value) — add a value to the top.
2. popStack(stack) — remove and return the top value.
3. peekStack(stack) — return the top value without removing it.
4. isEmpty(stack) — return true if the stack is empty.

 */

let arr =[];

function isEmpty(){
    if(arr.length==0){
        console.log('Stack Empty');
        return true;
    }
    else{
        return false;
    }
}
isEmpty(arr);
// Task 1
let Top=null;
function pushStack(value){
    if(isEmpty()){
    Top =0;
    arr[Top]=value;
    }
    else {
        Top+=1;
        arr[Top]=value;
    }
}
pushStack(10);
pushStack(90);
pushStack(65);

console.log(arr);


function popStack(){   
    if(isEmpty()){
        return console.log('Empty Stack')
    }
    else{
    const pop = arr[Top];
    arr.splice(Top,1)
    Top--;
    return pop;
    }
}
const popItem =popStack(arr);
console.log(popItem);
console.log(arr);

function peak(){
    if(isEmpty()){
         return console.log('Empty Stack')
    }
    else{
    return arr[Top];
    }
}
const peakItem =peak(arr);
console.log(peakItem)
