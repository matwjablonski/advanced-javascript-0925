const users = [
  { id: 1, username: "Alice", email: "alice@example.com", isActive: true },
  { id: 2, username: "Bob", email: "bob@example.com", isActive: false },
  { id: 3, username: "Charlie", email: "alice@example.com", isActive: true },
  { id: 4, username: "David", email: "david@example.com", isActive: true },
  { id: 5, username: "Eve", email: "eve@example.com", isActive: false },
  { id: 6, username: "Frank", email: "frank@example.com", isActive: true },
];

const uniqueEmails = Array.from(
  new Set(
    users.map(user => user.email)
  )
).map(email => ({
  email,
  ...users.find(user => user.email === email)
}));

console.log(uniqueEmails);