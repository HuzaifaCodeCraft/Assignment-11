const products = [
  { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
  { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
  { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
  { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
  { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
  { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

// sort() mutates the array it is called on, so every solution sorts a copy: [...products]
const names = (arr) => arr.map((p) => p.name);

// ===================== PART 1: SORT =====================

// 1. Price: low to high
const q1 = [...products].sort((a, b) => a.price - b.price);
console.log("1. Price low->high:", names(q1));

// 2. Price: high to low
const q2 = [...products].sort((a, b) => b.price - a.price);
console.log("2. Price high->low:", names(q2));

// 3. Name: A to Z
const q3 = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log("3. Name A-Z:", names(q3));

// 4. Rating: highest first
const q4 = [...products].sort((a, b) => b.rating - a.rating);
console.log("4. Rating high->low:", names(q4));

// 5. Quantity: lowest to highest
const q5 = [...products].sort((a, b) => a.quantity - b.quantity);
console.log("5. Quantity low->high:", names(q5));

// 6. 3 most expensive
const q6 = [...products].sort((a, b) => b.price - a.price).slice(0, 3);
console.log("6. Top 3 expensive:", names(q6));

// 7. 2 cheapest
const q7 = [...products].sort((a, b) => a.price - b.price).slice(0, 2);
console.log("7. 2 cheapest:", names(q7));

// 8. Price below 10,000, sorted low to high
const q8 = products.filter((p) => p.price < 10000).sort((a, b) => a.price - b.price);
console.log("8. Under Rs.10,000:", names(q8));

// 9. Top 3 highest-rated
const q9 = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);
console.log("9. Top 3 rated:", names(q9));

// 10. Rating high->low; if equal, price low->high
const q10 = [...products].sort((a, b) => b.rating - a.rating || a.price - b.price);
console.log("10. Rating then price:", names(q10));

// ===================== PART 2: REDUCE =====================

// 1. Total price
const r1 = products.reduce((sum, p) => sum + p.price, 0);
console.log("\nR1. Total price:", r1);

// 2. Total quantity
const r2 = products.reduce((sum, p) => sum + p.quantity, 0);
console.log("R2. Total quantity:", r2);

// 3. Average price
const r3 = products.reduce((sum, p) => sum + p.price, 0) / products.length;
console.log("R3. Average price:", r3.toFixed(2));

// 4. Most expensive (no initial value: the first element starts as the accumulator)
const r4 = products.reduce((max, p) => (p.price > max.price ? p : max));
console.log("R4. Most expensive:", r4.name);

// 5. Cheapest
const r5 = products.reduce((min, p) => (p.price < min.price ? p : min));
console.log("R5. Cheapest:", r5.name);

// 6. Highest rated
const r6 = products.reduce((best, p) => (p.rating > best.rating ? p : best));
console.log("R6. Highest rated:", r6.name);

// 7. Count of products with price > 5000
const r7 = products.reduce((count, p) => (p.price > 5000 ? count + 1 : count), 0);
console.log("R7. Price > 5000:", r7);

// 8. Total inventory value (price * quantity)
const r8 = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log("R8. Inventory value:", r8);

// 9. Total quantity of products with rating above 4.3
const r9 = products.reduce((sum, p) => (p.rating > 4.3 ? sum + p.quantity : sum), 0);
console.log("R9. Qty with rating > 4.3:", r9);

// 10. One reduce() building a summary object
const r10 = products.reduce(
  (acc, p) => ({
    totalProducts: acc.totalProducts + 1,
    totalQuantity: acc.totalQuantity + p.quantity,
    totalInventoryValue: acc.totalInventoryValue + p.price * p.quantity,
  }),
  { totalProducts: 0, totalQuantity: 0, totalInventoryValue: 0 }
);
console.log("R10. Summary:", r10);

// Proof that the original array was never changed
console.log("\nOriginal order untouched:", names(products));