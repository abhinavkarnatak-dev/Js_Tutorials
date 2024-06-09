// Stack (Used in primitive types) - Copy of value
let myName = "Abhinav"
let anotherName = myName
anotherName = "ZiKt0R"
console.log(myName);
console.log(anotherName);

// Heap (Used in non-primitive types) - Reference of value (changes in original value)
let userOne = {
    email: "example1@gmail.com",
    upi: "example@ybl"
}
let userTwo = userOne
userTwo.email = "example2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);