function* taskQueue(tasks) {
  for (const task of tasks) {
    yield task;
  }
}

function* priorityTasks(queue, priority) {
  for (const pTask of priority) {
    yield { ...pTask, priority: "PRIORITY" };
  }
  yield* queue;
}

const tasks = [
  { name: "Email", duration: 2 },
  { name: "Build report", duration: 5 },
  { name: "Meeting", duration: 1 },
];

const priorities = [
  { name: "Server restart", duration: 1 }
];

const allTasks = priorityTasks(taskQueue(tasks), priorities);

console.log(allTasks);

for (const task of allTasks) {
  console.log(`[${task.priority || "NORMAL"}] ${task.name} (${task.duration}h)`);
}

// [PRIORITY] Server restart (1h)
// [NORMAL] Email (2h)
// [NORMAL] Build report (5h)
// [NORMAL] Meeting (1h)
