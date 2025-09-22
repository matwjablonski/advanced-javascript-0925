document.getElementById("loadData").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      console.log("Użytkownicy:", users);
      // debugger – można też użyć do zatrzymania kodu
      users.forEach(user => {
        console.log(user.name);
      });
    })
    .catch(error => console.error("Błąd:", error));
});