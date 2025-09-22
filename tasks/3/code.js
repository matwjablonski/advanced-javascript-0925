function processData() {
  console.log("Start processing");

  console.log(count); // 1. powinno być undefined

  const count = 0;
  let total = 10;
  const factor = 2;

  if (total > 5) {
    let total = "20";
    count += total; 
    console.log("Inside if:", total);
  }

  console.log("Count:", count); // 2. powinno być 20
  console.log("Total:", total);  // 3. powinno być 10

  function multiply() {
    console.log(factor * total); // 4. powinno być 20
  }

  multiply();
}

processData();