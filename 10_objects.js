/*
Singleton object gets created when we declare objects with the help or constructors,
while as literals, it is not created
*/


// Literals method
const JsUser = {
    name: "Abhinav",
    age: 19,
    location: "Haldwani",
    email: "example@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// Accessing Object
console.log(JsUser.name);
console.log(JsUser["name"])


// Using symbol
const mySym = Symbol("key1")
const JsUser1 = {
    name: "ZiKt0R",
    [mySym]: "mykey1", // Use [] to add symbol to object
    age: 19,
    location: "Haldwani",
    email: "example1@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser1[mySym]);


// Changing object values
JsUser.email = "anotheremail@google.com"
// Object.freeze(JsUser) // For locking object to restrict changes in object


// Using functions with object
JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greeting2 = function() {
    console.log(`Hello ${this.name}`); // To refer to same object, we use thid
}
console.log(JsUser.greeting); // Function is not executed, we need ()
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


// Constructor method
/*
Object.create or
const tinderUser = new Object{}
*/
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Abhinav",
            lastname: "Karnatak"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2) // order inside assign is (target, source), here {} is target and obj1, obj2 are source
const obj4 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);


// For project/database purposes
console.log(Object.keys(tinderUser)); // Returns array, which can be used in future
console.log(Object.values(tinderUser)); // Returns array, which can be used in future
console.log(Object.entries(tinderUser)); // Returns subarrays consisting of keys and values, which can be used in future
console.log(tinderUser.hasOwnProperty('isLogged')); // To check if the desired property is present or not


// De-structuring
const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Abhinav"
}
const {courseInstructor: Instructor} = course // We also use {{}} for de-structuring
console.log(Instructor);

// API
{
    "name": "Abhinav",
    "coursename": "JS in hindi",
    "price": "free"
} // JSON example

[
    {},
    {},
    {}
] // In form of array