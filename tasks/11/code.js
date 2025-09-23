class PaymentMethod {} // Abstract class

class CreditCardPayment {}

class PayPalPayment {}

const payment1 = new CreditCardPayment("1234-5678-9876-5432");
payment1.pay(100); // Paid 100 with credit card 1234-5678-9876-5432

const payment2 = new PayPalPayment("alice@example.com");
payment2.pay(50); // Paid 50 via PayPal (alice@example.com)

// const pm = new PaymentMethod(); // Error: Cannot instantiate abstract class