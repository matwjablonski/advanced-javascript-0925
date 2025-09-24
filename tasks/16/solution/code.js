const getWaitingTime = () => Math.random() * 2000 + 1000;

const calculateIsProcessFailed = () => Math.random() < 0.2;

function createOrder(orderId, callback) {
    setTimeout(() => {
        calculateIsProcessFailed() ?
            callback(new Error('Order creation failed')) :
            callback(null, orderId);
    }, getWaitingTime());
}

function processPayment(orderId, callback) {
    setTimeout(() => {
        calculateIsProcessFailed() ?
            callback(new Error('Payment processing failed')) :
            callback(null, orderId);
    }, getWaitingTime());
}

function shipOrder(orderId, callback) {
    setTimeout(() => {
        calculateIsProcessFailed() ?
            callback(new Error('Order shipping failed')) :
            callback(null, orderId);
    }, getWaitingTime());
}

const orderId = 123;

createOrder(orderId, (err, id) => {
    if (err) {
        return console.error(err.message);
    }

    console.log(`Order ${id} created successfully.`);

    processPayment(id, (err, id) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(`Payment for order ${id} processed successfully.`);
        
        shipOrder(id, (err, id) => {
            if (err) {
                return console.error(err.message);
            }

            console.log(`Order ${id} shipped successfully.`);
        });
    });
});