let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

// Scope => {}
// Variales declared with 'var can be accessed outside the scope, so it is not recommended to use var

var d = 300 // Global scope
if(true) {
    var d = 30 // Block scope
}

console.log(d); // Prints value inside the scope

// Nested scope
function one() {
    const username = "Abhinav"
    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website); // It is accessing local variable so it will not work
    two()
}
one()