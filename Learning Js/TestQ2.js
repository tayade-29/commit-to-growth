/**
 Problem 2 — Create a reliable async job queue
Very hard · 20 marks
Imagine you're building a backend service that needs to process 100 jobs. Each job is an asynchronous function that might succeed or fail.

Implement:
async function runQueue(jobs, concurrency) {
  // Your implementation
}


Example:
const jobs = [
  () => Promise.resolve("A"),
  () => Promise.reject(new Error("B failed")),
  () => Promise.resolve("C"),
  () => Promise.resolve("D")
];


Usage:
const results = await runQueue(jobs, 2);


Your queue must:
1. Run no more than concurrency jobs simultaneously.
2. Preserve the original order of results, regardless of completion order.
3. Record failures without stopping unrelated jobs.
4. Continue processing remaining jobs when one fails.
5. Return a result for every job, indicating success or failure.
6. Reject invalid inputs, including non-positive or non-integer concurrency.
7. Handle synchronous exceptions thrown by a job as well as rejected promises.
8. Correctly handle empty input.
For example, your output could have this structure:
[
  { status: "fulfilled", value: "A" },
  { status: "rejected", reason: Error("B failed") },
  { status: "fulfilled", value: "C" },
  { status: "fulfilled", value: "D" }
]


You must implement the concurrency control yourself. Calling Promise.all(jobs.map(...)) without controlling execution is not a solution.

Explain:
- How you track the next job to execute.
- How you guarantee the concurrency limit.
- Whether jobs begin in input order.
- What happens if a job throws before returning a promise.
- Why your approach is better than starting every job immediately.
What I'm testing: promises, async/await, closures, shared state, error handling, arrays, concurrency, asynchronous execution and practical backend design.
 */


