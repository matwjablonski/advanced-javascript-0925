// Partial application z bind

function foo(a, b, c) {

}

const bar = foo.bind(null, 1); // częściowe zastosowanie argumentu a = 1

bar(2, 3); // a = 1, b = 2, c = 3

// partial application z domknięciem

function foo2(a) {
    let counter = 0;

    return function(b, c) {
        counter++;
        console.log("Request #", counter);
    }
}

const bar2 = foo2(1);

bar2(2, 3); // Request #1
bar2(4, 5); // Request #2
bar2(6, 7); // Request #3

// partial application z hof

function foo3(a) {
    return function(b, c) {
        console.log(a, b, c);
    }
}

const bar3 = foo3(1);

bar3(2, 3); // 1 2 3
bar3(4, 5); // 1 4 5
bar3(6, 7); // 1 6 7

// partianl application z partial function

function foo4(fn, ...args) {
    return function(...rest) {
        return fn(...args, ...rest);
    }
}

const bar4 = foo4(foo, 1);

bar4(2, 3); // a = 1, b = 2, c = 3
bar4(4, 5); // a = 1, b = 4, c = 5
bar4(6, 7); // a = 1, b = 6, c = 7