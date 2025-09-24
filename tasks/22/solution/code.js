const products = [
  { name: "Laptop", price: 4000, category: "electronics" },
  { name: "Phone", price: 2000, category: "electronics" },
  { name: "Shirt", price: 150, category: "clothes" },
  { name: "Shoes", price: 300, category: "clothes" },
  { name: "Book", price: 50, category: "books" }
];

const filterByCategory = category => items => items.filter(item => item.category === category);

const applyDiscount = discount => items => items.map(item => ({
  ...item,
  price: item.price * (1 - discount / 100)
}));

const clothesFilter = filterByCategory("clothes");
const discount10 = applyDiscount(10);

const discountedClothes = discount10(clothesFilter(products));

console.log(discountedClothes);
/*
[
  { name: "Shirt", price: 135, category: "clothes" },
  { name: "Shoes", price: 270, category: "clothes" }
]
*/