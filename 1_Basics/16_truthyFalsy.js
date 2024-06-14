// Truthy values
const userEmail = "example@google.com"
if(userEmail) { // No comparision, just the above string is considered true
    console.log("Got user email");
} 
else {
    console.log("Don't have user email");
}
/*
Eg: true, "0", 'false', " ", and all non-empty strings, [] -> empty array, {} -> empty object, function(){} -> empty function
    (false == 0), (false == ''), (0 == ''), etc.
*/

// Falsy values
/*
Eg: false, 0, -0, BigInt 0n, "", null, undefined, NaN, etc.
*/

// Nullish Coalescing Operator (??)
let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 20 ?? 25 // 20
console.log(val1);