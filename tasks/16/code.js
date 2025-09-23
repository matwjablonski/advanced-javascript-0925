const TIME = 1000;

function createOrder(orderId, callback) {
    setTimeout(() => {

    }, TIME);
}

function processPayment(orderId, callback) {

}

function shipOrder(orderId, callback) {

}

const orderId = 123;

createOrder(orderId, (err, id) => {
    // jesli error to przerwij

    // jesli nie to processPayment

    
})