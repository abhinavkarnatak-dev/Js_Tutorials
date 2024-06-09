const name = "Abhinav"
const repoCount = 2

// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// String methods

const gameName = new String('ZiKt0R-ak')
console.log(gameName[0]);
console.log(gameName.__proto__); // To access prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0, 4)); // Negative index not allowed
console.log(gameName.slice(-5, 4)); // Negative index allowed

const newString = "    Abhinav    "
console.log(newString);
console.log(newString.trim()); // To remove leading and trailing whitespaces

const url = "https://abhinav.com/abhinav%16karnatak"
console.log(url.replace('%16', '-'));
console.log(url.includes('abhinav'));
console.log(url.includes('ziktor'));
console.log(gameName.split('-'));