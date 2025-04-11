// Example to understand the event loop execution order

console.log("Start");

setTimeout(() => {
  console.log("Timer 1"); // Will run in the timer queue
}, 0);

setTimeout(() => {
  console.log("Timer 2"); // Will also run in the timer queue
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1"); // Runs in the microtask queue (after nextTick in Node.js)
});

process.nextTick(() => {
  console.log("Next Tick 1"); // nextTick queue runs before Promise microtask queue
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

process.nextTick(() => {
  console.log("Next Tick 2");
});

console.log("End");

// Expected Output:
// Start
// End
// Next Tick 1
// Next Tick 2
// Promise 1
// Promise 2
// Timer 1
// Timer 2
