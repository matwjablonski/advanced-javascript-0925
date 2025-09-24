function calculate(num) {
    const numbers = [num];

    function next(nextValue) {
        if (typeof nextValue === 'string') {
            const operation = nextValue.toLowerCase();
            return numbers.reduce((acc, curr) => {
                switch (operation) {
                    case "add":
                        return acc + curr;
                    case "subtract":
                        return acc - curr;
                    case "multiply":
                        return acc * curr;
                    case "divide":
                        return acc / curr;
                    default:
                        throw new Error("Unknown operation");
                }
            });
        }

        if (typeof nextValue === 'number') {
            numbers.push(nextValue);
        }

        return next;
    }

    return next;
}

console.log(calculate(5)(3)("add"));               // 8
console.log(calculate(10)(2)(1)("subtract"));      // 7  = 10 - 2 - 1
console.log(calculate(2)(3)(4)("multiply"));       // 24 = 2*3*4
console.log(calculate(100)(2)(5)("divide"));       // 10 = 100/2/5
console.log(calculate(1)(2)(3)(4)(5)("add"));      // 15 = 1+2+3+4+5