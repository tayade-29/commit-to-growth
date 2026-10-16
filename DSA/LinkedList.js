/**
Question 2: Create and traverse a linked list
Create a singly linked list containing 10 → 20 → 30 → null.
1. Define a Node class with value and next.
2. Create three nodes and connect them.
3. Write printList(head) to traverse the list and return the values in an array: [10, 20, 30].
4. Handle an empty list (head = null) by returning [].
Hint: Start at head and keep moving to current.next until current becomes null.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const n1 =new Node(10);
const n2= new Node(20);
const n3=new Node(30)


let head =n1;
n1.next =n2;
n2.next =n3;

function printList(){
   let temp =head;
   while(temp!=null){
    console.log(temp.value)
    temp = temp.next;
   }
}
printList()
