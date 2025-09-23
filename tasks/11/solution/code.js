class PaymentMethod {
    constructor() {
        if (new.target === PaymentMethod) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    pay(amount) {
        throw new Error("Method 'pay()' must be implemented.");
    }

}

class CreditCardPayment extends PaymentMethod {
    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;
    }

    pay(amount) {
        console.log(`Paid ${amount} with credit card ${this.cardNumber}`);
    }
}

class PayPalPayment extends PaymentMethod {
    constructor(email) {
        super();
        this.email = email;
    }

    pay(amount) {
        console.log(`Paid ${amount} via PayPal (${this.email})`);
    }
}

const payment1 = new CreditCardPayment("1234-5678-9876-5432");
payment1.pay(100); // Paid 100 with credit card 1234-5678-9876-5432

const payment2 = new PayPalPayment("alice@example.com");
payment2.pay(50); // Paid 50 via PayPal (alice@example.com)

// const pm = new PaymentMethod(); // Error: Cannot instantiate abstract class