const users = [
  { name: "Alice", age: 25, isAdmin: false },
  { name: "Bob", age: 30, isAdmin: true },
  { name: "Charlie", age: 28, isAdmin: false },
  { name: "Diana", age: 35, isAdmin: true },
];

function getAdminNames(users) {
  return users
    .filter(user => user.isAdmin)
    .map(user => user.name);
}

function averageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

function promoteToAdmin(users, name) {
  return users.map(user => 
    user.name === name ? { ...user, isAdmin: true } : user
  );
}

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