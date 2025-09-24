const catalog = [
  { name: "Laptop", price: 4000 },
  { name: "Smartphone", price: 2000 },
  {
    name: "Bundle",
    items: [
      { name: "Tablet", price: 1500 },
      { name: "Mouse", price: 100 },
      {
        name: "Accessory Set",
        items: [
          { name: "Keyboard", price: 250 },
          { 
            name: "Headphones", 
            items: [
                { name: "Over-Ear", price: 300 },
                { name: "In-Ear", price: 200 },
            ]
         }
        ]
      }
    ]
  }
];


function getTotalPrice(items) {
  return items.reduce((acc, item) => {
    if (item.items) { 
      return acc + getTotalPrice(item.items);
    }

    return acc + item.price;
  }, 0);
}

const total = getTotalPrice(catalog);

console.log(total);