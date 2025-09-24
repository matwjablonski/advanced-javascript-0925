const Box = (value) => ({
  map: (fn) => {
    
  },
  value
});


const result = Box(5)
  .map(x => x + 1)
  .map(x => x * 2);


// 12