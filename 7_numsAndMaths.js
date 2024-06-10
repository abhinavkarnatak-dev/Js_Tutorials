// Numbers
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // For Decimals

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // Rounding off

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // US Standard Value Representation
console.log(hundreds.toLocaleString('en-IN')); // Indian Standard Value Representation

// Maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Value always between 0 and 1
console.log((Math.random()*10)+1); // Value always between 1 and 11

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Value between min and max