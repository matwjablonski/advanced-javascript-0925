const users = [
  { name: "Alice", age: 25, isAdmin: false },
  { name: "Bob", age: 30, isAdmin: true },
  { name: "Charlie", age: 28, isAdmin: false },
  { name: "Diana", age: 35, isAdmin: true },
];



console.log(getAdminNames(users)); 
// ["Bob", "Diana"]

console.log(averageAge(users)); 
// 29.5

console.log(promoteToAdmin(users, "Charlie")); 
/*
[
  { name: "Alice", age: 25, isAdmin: false },
  { name: "Bob", age: 30, isAdmin: true },
  { name: "Charlie", age: 28, isAdmin: true },
  { name: "Diana", age: 35, isAdmin: true },
]
*/