const user = {
    username: "Abhinav",
    price: 999,
    welcomeMessage: function() {
        console.log(this);
        console.log(`${this.username}, welcome to website`); // Use this for current context
    }
}
user.welcomeMessage()
user.username = "ZiKt0R"
console.log(this);
user.welcomeMessage()

function chai() {
    console.log(this);
}
chai()

// Arrow functions
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

const addThree = (num1, num2, num3) => (num1 + num2 + num3) // Implicit return (single line statement without return)
console.log(addThree(3, 4, 5));