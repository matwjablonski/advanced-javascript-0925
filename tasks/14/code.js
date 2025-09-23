function* taskQueue(tasks) {}

function* priorityTasks(queue, priority) {}

const tasks = [
  { name: "Email", duration: 2 },
  { name: "Build report", duration: 5 },
  { name: "Meeting", duration: 1 },
];

const priorities = [
  { name: "Server restart", duration: 1 }
];

const allTasks = priorityTasks(taskQueue(tasks), priorities);

// [PRIORITY] Server restart (1h)
// [NORMAL] Email (2h)
// [NORMAL] Build report (5h)
// [NORMAL] Meeting (1h)
