function foo () {

    console.log(a); // undefined
    // var a = 1;

    let a = 2; // SyntaxError: Identifier 'a' has already been declared
    console.log(a); // 1
}


// after hoisting
function foo () {
    var a;
    console.log(a); // undefined
    a = 1;
    console.log(a); // 1
}