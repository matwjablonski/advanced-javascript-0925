function getPrice(product) {
    const prices = {
        book: 20,
        laptop: 1000,
        phone: 500,
        tablet: 750
    };
    return prices[product] || 20000;
}

function orderProduct(
    productName, 
    quantity = 1, 
    pricePerItem = getPrice(productName), 
    deliveryCost = 10,
) {
    return {
        product: productName,
        quantity,
        price: pricePerItem * quantity,
        deliveryCost: (pricePerItem * quantity) > 100 ? 0 : deliveryCost,
    }
}

getPrice('book') // 20
getPrice('car') // 20000

orderProduct('book', 2) // { product: 'book', quantity: 2, price: 40, deliveryCost: 10 }