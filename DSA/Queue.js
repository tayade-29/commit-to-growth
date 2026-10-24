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

let rear = -1;
let front =-1;

function isQueueEmpty(){
    if(front ==-1 & rear == -1){
        console.log('Queue is Empty')
        return true;
    }
    else{
        return false;
    }
}


function enqueue(value){
    if (isQueueEmpty()){
        front = front+1;
        rear =rear+1;
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
        let dequeued = queue[front];
        front = front +1;
        return dequeued;
    }
}
const dequeued =dequeue();
console.log();

function displayQueue(){  
    for(i=front;i<=rear;i++){
        queue=[...queue[i]];
    }
    console.log(queue)
}
displayQueue(queue);

function sayGoodNight(name){
    console.log(`Hi ${name}! Good Night `);
}
const timer = setTimeout(()=>{
    sayGoodNight('Pranjal')
},1000)
