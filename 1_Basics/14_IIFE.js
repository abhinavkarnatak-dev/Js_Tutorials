// Immediately Invoked Function Expressions (IIFE)
// IIFE ka use -> global scope mein declaration ke pollution ko hatana

// Normal way to call function -> chai()
function chai() {
    console.log('DB CONNECTED');
}

// (function definition)(execution call)
(function IifeExample() {
    // named iife (function with a name)
    console.log('DB CONNECTED IIFE');
})(); 

((name) => {
    // simple iife (no function name)
    console.log(`Hello ${name}'s DB`);
})('Abhinav');