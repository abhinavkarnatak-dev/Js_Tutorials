// Arrays are resizable
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);

/*  
Array copy operations create shallow copies
Shallow copies - whose properties share the same reference point (change in copy -> change in original array)
Deep copies - whose properties do not share the same reference point (change in copy -> no change in original array)
*/

const myHeroes = ["Iron Man", "Spider-Man", "Captain America"]
const myArr2 = new Array(0, 1, 2, 3, 4, 5) // Another way of declaring an array


// Array methods

myArr.push(6) // Adds element at last
myArr.push(7)
myArr.pop() // Removes last element
myArr.unshift(1) // Shifts other elements right and add element at start
myArr.shift() // Removes start element and shifts other elements left
console.log(myArr);
console.log(myArr.includes(9))
console.log(myArr.indexOf(9)) // If answer is -1, it means value is not present

const newArr = myArr.join() // Adds all the element of an array into a string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // Does not affect original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // Removes the range of elements from the original array
console.log(myn2);
console.log("C", myArr);

const arr1 = ["one", "two", "three"]
const arr2 = ["four", "five", "six"]
// arr1.push(arr2) // Does not merge array
// console.log(arr1);

arr3 = arr1.concat(arr2) // Concat returns new array
console.log(arr3);

const arr4 = [...arr1, ...arr2] // Spreading arrays
console.log(arr4);

const arr5 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]]
const another_array = arr5.flat(Infinity) // Converts all nested arrays to a single array
console.log(another_array);

console.log(Array.isArray("Abhinav"));
console.log(Array.from("Abhinav"));
console.log(Array.from({name: "Abhinav"})); // Creates empty array. We need to specify if we want to make array from keys or values.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));