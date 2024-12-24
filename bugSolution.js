function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error('Division by zero');
  } else if (a === 0 || b === 0) {
    return 0;
  }
  return a / b;
}

console.log(myFunction(10, 0)); // This will return Infinity
console.log(myFunction(10, 2));  // This will return 5
console.log(myFunction(0, 5)); // This will return 0
console.log(myFunction(0, 0)); // This will return 0