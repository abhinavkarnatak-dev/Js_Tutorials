const accountId = 144553;
let accountEmail = "example@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
// let accountState; // Undefined

// accountId = 2; // Not allowed
accountEmail = "example1@gmial.com";
accountPassword = "21212121";
accountCity = "Haldwani";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, acoountState]);