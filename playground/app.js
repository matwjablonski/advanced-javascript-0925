// function foo () {

//     console.log(a); // undefined
//     // var a = 1;

//     let a = 2; // SyntaxError: Identifier 'a' has already been declared
//     console.log(a); // 1
// }


// // after hoisting
// function foo () {
//     var a;
//     console.log(a); // undefined
//     a = 1;
//     console.log(a); // 1
// }

// console.log("console.log 1")

// setTimeout(() => {
//     console.log("setTimeout 1 finished");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("promise 1 resolved");
// });

// console.log("console.log 2")

function Account() {
    this.incomes = [];
}

Account.prototype.addIncome = function (amount, description) {
    this.incomes.push({ amount, description });
};

function ChildAccount() {
    Account.call(this);
}

ChildAccount.prototype = Object.create(Account.prototype);
ChildAccount.prototype.constructor = ChildAccount;

ChildAccount.prototype.addIncome = function (amount, description) {
    if (amount > 1000) {
        console.log("Child account cannot have income greater than 1000");
        return;
    }
    Account.prototype.addIncome.call(this, amount, description);
}

const childAccount = new ChildAccount();
childAccount.addIncome(100, "Birthday gift");
childAccount.addIncome(2000, "Lottery win");
childAccount.addIncome(500, "Part-time job");

console.log(childAccount); // [{ amount: 100, description: "Birthday gift" }]