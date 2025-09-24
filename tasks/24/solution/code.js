function fetchUser(userId) {
  console.log(`Pobieram dane dla użytkownika ${userId}...`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: `User${userId}` });
    }, 1000); // symulacja opóźnienia
  });
}

function memoizeAsync(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const promise = fn(arg)
      .catch(err => {
        cache.delete(arg);
        throw err;
      });

    cache.set(arg, promise);
    return promise;
  }
}


const memoFetchUser = memoizeAsync(fetchUser);

const test = async () => {
  await memoFetchUser(1).then(console.log); // pobiera dane, loguje po 1s
  await memoFetchUser(1).then(console.log); // od razu zwraca wynik z cache
  await memoFetchUser(2).then(console.log); // pobiera nowe dane, loguje po 1s
}

test();