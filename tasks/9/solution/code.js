function formatInvoice(customer, items) {
  const { total, itemQty } = items.reduce((acc, item) => {
    acc.total += item.price * item.quantity;
    acc.itemQty += item.quantity;

    return acc;
  }, { total: 0, itemQty: 0 } ) 

  return `
    Invoice for ${customer}
    Date: ${new Date().toLocaleDateString('pl-PL')}
    ------------------------
    ${items.map(item => `
      - ${item.name}: ${item.price} zł x ${item.quantity} = ${item.price * item.quantity} zł
    `).join('')}
    ------------------------
    Total items: ${itemQty}
    Total: ${total} zł
  `
}

const invoice = formatInvoice('Jan Kowalski', [
  { name: 'book', price: 20, quantity: 2 },
  { name: 'car', price: 20000, quantity: 1 },
]);

console.log(invoice);

// Invoice for Jan Kowalski
// Date: 2025-09-24
// ------------------------
// - book: 20 zł x 2 = 40 zł
// - car: 20000 zł x 1 = 20000 zł
// ------------------------
// Total items: 3
// Total: 20040 zł