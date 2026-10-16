/**
 Your challenge — implement a queue
Start with this:
let queue = [];


Write these four functions yourself:
function enqueue(value) {
    // Add value to the rear
}

function dequeue() {
    // Remove and return the front item
}

function peekQueue() {
    // Return the front item without removing it
}

function isQueueEmpty() {
    // Return true or false
}
 */

let queue=[];

let rear = front = -1;

function isQueueEmpty(){
    if(front == rear == -1){
        console.log('Queue is Empty')
        return true;
    }
    else{
        return false;
    }
}


function enqueue(value){
    if (isQueueEmpty){
        front = rear +=1;
        queue[rear]=value;
    }
    else{
        rear +=1;
        queue[rear]=value;
    }
}
enqueue(10);
enqueue(20);
enqueue(30);
console.log(queue);

function dequeue(){
    if(isQueueEmpty()){
        console.log('Already Empty');
    }
    else{
        let dequeued = queue[rear];
        queue.splice(rear,1);
        rear-=1;
        return dequeued;
    }
}
const dequeued =dequeue();
console.log(dequeued);
console.log(queue);