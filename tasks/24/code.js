function fetchUser(userId) {
  console.log(`Pobieram dane dla użytkownika ${userId}...`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: `User${userId}` });
    }, 1000); // symulacja opóźnienia
  });
}


const memoFetchUser = memoizeAsync(fetchUser);

memoFetchUser(1).then(console.log); // pobiera dane, loguje po 1s
memoFetchUser(1).then(console.log); // od razu zwraca wynik z cache
memoFetchUser(2).then(console.log); // pobiera nowe dane, loguje po 1s