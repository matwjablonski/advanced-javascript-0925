const products = [
  { id: 1, name: "Laptop", price: 4000 },
  { id: 2, name: "Smartphone", price: 2000 },
  { id: 3, name: "Tablet", price: 1500 },
];

// updatePrice(products, id, newPrice)

function updatePrice(products, id, newPrice) {
  return products.map(product =>
    product.id === id ? { ...product, price: newPrice } : product
  );
}

// addProduct(products, product)

function addProduct(products, product) {
  return [...products, product];
}

// removeProduct(products, id)

function removeProduct(products, id) {
  return products.filter(product => product.id !== id);
}

const user = {
  name: "Alice",
  age: 25,
  address: { city: "Warsaw", zip: "00-001" }
};

// updateAge(user, newAge)

function updateAge(user, newAge) {
  return { ...user, age: newAge };
}

// updateCity(user, newCity)

function updateCity(user, newCity) {
  return { ...user, address: { ...user.address, city: newCity }
 };
}

// addPhone(user, phone)

function addPhone(user, phone) {
  return { ...user, phones: [...(user.phones || []), phone] };
}