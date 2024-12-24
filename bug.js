function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line handles zero values correctly
  }
  return a / b; // Potential division by zero if b is 0
}

console.log(myFunction(10, 0)); // This will return 0, which is correct
console.log(myFunction(10, 2));  // This will return 5
console.log(myFunction(0, 5)); // This will return 0
console.log(myFunction(0, 0)); // This will return 0