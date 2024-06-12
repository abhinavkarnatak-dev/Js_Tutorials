// Without parameters
function sayMyName() {
    console.log("Abhinav");
}
sayMyName() // Calling a function

// With parameters
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
addTwoNumbers(2,3) // Calling a function with arguments
// or
const result1 = addTwoNumbers(3,5)
console.log(result1); // undefined because there is no return statement

// Returning value
function addition(number1, number2) {
    let result = number1 + number2
}
const result2 = addition(2,3)
console.log(result2);

function loginUserMessage(username = "ZiKt0R") { // We assign default value to parameter
    if(!username) { // It means username === undefined
        console.log("Please enter a username");
    }
    else {
        return `${username} just logged in`
    }
}
console.log(loginUserMessage("Abhinav"));


// For unknown number of parameters (like you add multiple items in cart)
function calculateCartPrice(...num) { // Here, '...' is rest operator
    return num
}
console.log(calculateCartPrice(200, 400, 500));

// Using object as argument
const user = {
    username: "Abhinav",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
//or
handleObject({
    username: "ZiKt0R",
    price: 299
})

// Using array as argument
const myArr = [200, 400, 600, 800]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myArr));
// or
console.log(returnSecondValue([100, 200, 300, 400]));