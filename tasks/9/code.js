function formatInvoice(customer, items) {

}

formatInvoice('Jan Kowalski', [
  { name: 'book', price: 20, quantity: 2 },
  { name: 'car', price: 20000, quantity: 1 },
]);

// Invoice for Jan Kowalski
// Date: 2025-09-24
// ------------------------
// - book: 20 zł x 2 = 40 zł
// - car: 20000 zł x 1 = 20000 zł
// ------------------------
// Total items: 3
// Total: 20040 zł