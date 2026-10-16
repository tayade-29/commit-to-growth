/**
 Day 2 — Question 2: Run a Callback After a Delay
Difficulty: Easy–Medium
Problem statement
Write a function called runAfterDelay(message, delay, callback).
It should:
1. Accept a message string.
2. Accept a delay in milliseconds.
3. Accept a callback function.
4. After the specified delay, print the message and execute the callback, passing the message to it.
Expected output
runAfterDelay("Task completed", 2000, (message) => {
    console.log("Callback received:", message);
});
 */

function runAfterDelay(message,delay,callback){
    const timer = setTimeout(()=>{
        callback(message)
    },delay)
}
function display(message1){
    console.log('hey'+ message1)
}
 runAfterDelay('Pranjal',2000,display)