function sumAll(...numbers) {
    if (!numbers.every(num => typeof num === 'number')) {
        throw new TypeError("All arguments must be numbers");
    }
    return numbers.reduce((acc, num) => acc + num, 0);
}

sumAll(1, 2, 3); // 6
sumAll(1, "2", 3); // TypeError

function combineArrays(...arrays) {
    return [].concat(...arrays);
}

combineArrays([1, 2], [3, 4], [5]); // [1, 2, 3, 4, 5]