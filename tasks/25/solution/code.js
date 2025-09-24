const Box = (value) => ({
  map: (fn) => Box(fn(value)),
  fold: (fn) => fn(value),
  chain: (fn) => fn(value),
  inspect: () => `Box(${value})`
});

const result = Box(5)
  .map(x => x + 1)
  .map(x => x * 2);

// result.fold(console.log);

const divide = (x, y) => y === 0 ? Box("Cannot divide by zero") : Box(x / y);

// divide(10)(0).fold(console.log); // 5

const divideResult = Box(10)
  .chain(x => divide(x, 2))
  .chain(x => divide(x, 3))
  .fold(console.log);