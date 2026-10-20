/**
 Problem 1 — Build a task analytics engine
Hard · 20 marks
This is based on the Task Tracker exercises you've already attempted, but with substantially more complex requirements.

You're given tasks from multiple users:
const tasks = [
  {
    id: 1,
    title: "Build API",
    status: "pending",
    priority: 3,
    estimate: 4,
    tags: ["backend", "api"],
    assigneeId: 101,
    dependencies: []
  },
  {
    id: 2,
    title: "Build UI",
    status: "pending",
    priority: 2,
    estimate: 3,
    tags: ["frontend", "ui"],
    assigneeId: 102,
    dependencies: [1]
  },
  {
    id: 3,
    title: "Test API",
    status: "done",
    priority: 3,
    estimate: 2,
    tags: ["backend", "testing"],
    assigneeId: 101,
    dependencies: [1]
  },
  {
    id: 4,
    title: "Deploy",
    status: "blocked",
    priority: 3,
    estimate: 1,
    tags: ["devops"],
    assigneeId: 103,
    dependencies: [2, 3]
  },
  {
    id: 5,
    title: "Fix UI",
    status: "pending",
    priority: 1,
    estimate: 2,
    tags: ["frontend", "bug"],
    assigneeId: 102,
    dependencies: []
  }
];


Implement:
function analyzeTasks(tasks) {
  // Your implementation
}


Your function must produce an analytics report containing:
1. Tasks grouped by status.
2. Total estimated hours per assignee.
3. Unique tags, preserving first-occurrence order.
4. Pending tasks whose dependencies are all completed.
5. The highest-priority task or tasks, including ties.
6. Completion percentage, with sensible behaviour for an empty array.
7. Tasks sorted by priority descending, then ID ascending, without mutating the original array.
Additional requirements:
- Do not hardcode statuses, user IDs, counts or tags.
- A task with a missing dependency must not be considered ready.
- Treat duplicate task IDs as invalid input and explain how you would handle them.
- Your solution should avoid repeatedly scanning the entire task list when a lookup structure would be more appropriate.
- Explain the time complexity of your approach.
What I'm testing: filter, map, reduce, flatMap, Set, Map, sorting, lookups, functions, validation, data modelling and algorithmic efficiency.

The challenge isn't using every array method. It's deciding which tools make your solution clearer and more efficient.
 */


const tasks = [
  {
    id: 1,
    title: "Build API",
    status: "pending",
    priority: 3,
    estimate: 4,
    tags: ["backend", "api"],
    assigneeId: 101,
    dependencies: []
  },
  {
    id: 2,
    title: "Build UI",
    status: "pending",
    priority: 2,
    estimate: 3,
    tags: ["frontend", "ui"],
    assigneeId: 102,
    dependencies: [1]
  },
  {
    id: 3,
    title: "Test API",
    status: "done",
    priority: 3,
    estimate: 2,
    tags: ["backend", "testing"],
    assigneeId: 101,
    dependencies: [1]
  },
  {
    id: 4,
    title: "Deploy",
    status: "blocked",
    priority: 3,
    estimate: 1,
    tags: ["devops"],
    assigneeId: 103,
    dependencies: [2, 3]
  },
  {
    id: 5,
    title: "Fix UI",
    status: "pending",
    priority: 1,
    estimate: 2,
    tags: ["frontend", "bug"],
    assigneeId: 102,
    dependencies: []
  }
];

function GroupTaskByStatus(){
    return Object.groupBy(tasks, tasks => tasks.status);
}

function estimatedHours(){
  const estimateHours=Object.groupBy(tasks, task => task.assigneeId);
  console.log(estimateHours);
  const TotalEstimateHours ={};
 for (const assigneeId of Object.keys(estimateHours)) {
    TotalEstimateHours[assigneeId] = estimateHours[assigneeId].reduce(
    (sum, task) => {
      return sum+task.estimate;
    },
    0
  );
}
console.log(TotalEstimateHours);
}

function UniqueTags(){
  const Tags = tasks.flatMap(task =>task.tags);
  console.log(Tags)
  const uniqueTags = new Set(Tags);
  console.log(uniqueTags);
}

function dependenciesOfPendingTask (){
  const dependenciesOfPendingTask =tasks.filter(task => task.dependencies[0]==0);
  if (dependenciesOfPendingTask.length==0){
    console.log('no task with prior dependencies');
  }
  console.log(dependenciesOfPendingTask);
}

function highestPriorityTask(){
  const highestPriorityTask= tasks.filter(task =>task.priority==1);
  console.log(highestPriorityTask)
}

function taskSortedByPriority(){
  const descendingSorting = tasks.sort((a,b) => b.priority -a.priority);
  console.log(descendingSorting);
}


function analyzeTasks(tasks) {
    return taskSortedByPriority(tasks);
} 

analyzeTasks(tasks);

