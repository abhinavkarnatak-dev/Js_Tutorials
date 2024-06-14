let score = "32"

console.log(typeof score);

let valueInNumber = Number(score) // String converted to number

console.log(typeof valueInNumber);

/* 
for "33ab" converted to Number, the type is Number but the value is NaN (Not a number)
for null converted to Number, the type is Number but the value is 0
for undefined converted to Number, the type is Number but the value is NaN
in boolean, true gets converted to 1, and false gets converted to 0
*/

// Negative value conversion
let value = 3
let negValue = -value
console.log(negValue);