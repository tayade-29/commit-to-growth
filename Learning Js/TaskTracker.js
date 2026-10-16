/*** 
Question 1: Build a Task Tracker
Easy–Medium

Concepts: Arrays · Objects · Map · Set · filter · Callbacks

Q. Imagine you're building a small task tracker. Each task has an ID, a title, and a status. You need to implement functions to manage and analyze the tasks.
Starter data:
const tasks = [
  { id: 1, title: "Learn closures", status: "done", tags: ["js"] },
  { id: 2, title: "Practice callbacks", status: "pending", tags: ["js", "async"] },
  { id: 3, title: "Build counter", status: "done", tags: ["js"] },
  { id: 4, title: "Practice callbacks", status: "pending", tags: ["async"] },
  { id: 5, title: "Learn Map", status: "pending", tags: ["js"] }
];


Your tasks:
1. Write getPendingTasks(tasks) that returns only pending tasks using filter().
2. Write getTaskTitles(tasks) that returns an array containing only the titles using map().
3. Write countTasksByStatus(tasks) that returns an object counting tasks by status. For the data above, the result should be:
   { done: 2, pending: 3 }
4. Write getUniqueTags(tasks) that returns every distinct tag only once using a Set.
5. Write groupTasksByStatus(tasks) that groups tasks into a Map where each status is a key and its tasks are the value.

Bonus challenge: Write findTaskByTitle(tasks, title, callback). Find the first matching task and pass it to callback. If no task exists, pass null.
Example usage:
findTaskByTitle(tasks, "Learn Map", (task) => {
  console.log(task);
});


Expected: the task with ID 5.
Your rule
Try solving without forEach, map, filter, Set, or Map documentation open beside you. If you get stuck, first write the logic in plain English, then convert each step into code.
*/


// Answer:



const tasks = [
  { id: 1, title: "Learn closures", status: "done", tags: ["js"] },
  { id: 2, title: "Practice callbacks", status: "pending", tags: ["js", "async"] },
  { id: 3, title: "Build counter", status: "done", tags: ["js"] },
  { id: 4, title: "Practice callbacks", status: "pending", tags: ["async"] },
  { id: 5, title: "Learn Map", status: "pending", tags: ["js"] }
];

// Task 1
function getPendingTasks(){
    return tasks.filter(task =>task.status === "pending");
}

const pendingTasks = getPendingTasks(tasks);
console.log(pendingTasks);
console.log(typeof(pendingTasks));

// Task 2
const getTasksTitle = () =>{
  return tasks.map(tasks => tasks.title)
}
console.log(getTasksTitle(tasks));

//Task 3
const countTaskByStatus = () => {
  const countTask={};
  countTask.done=(tasks.filter(tasks => tasks.status== 'done')).length;
  countTask.pending=tasks.filter(tasks => tasks.status== 'pending').length;
  return countTask;
}
console.log(countTaskByStatus(tasks))

//Task 4
const getUniqueTags =() =>{
  const uniqueTag= tasks.flatMap(tasks => tasks.tags);
  return new Set(uniqueTag);
}
console.log(getUniqueTags(tasks))

//Task 5
const groupTasksByStatus = (tasks) =>{
  const groupDone =(tasks.filter(tasks => tasks.status== 'done'));
  const groupPending =(tasks.filter(tasks => tasks.status== 'pending'))
  return ['Done'+':'+groupDone,'Pending'+':'+groupPending]
}
console.log(groupTasksByStatus(tasks));