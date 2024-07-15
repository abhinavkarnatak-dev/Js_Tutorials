// Promise is itself an object

// Creating a promise
const promise1 = new Promise(function(resolve, reject) {
    // Do an async task (DB Calls, cryptography related, network related)
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
// Consuming a promise
promise1.then(function() {
    console.log('Promise consumed');
}) // connected to resolve


// Directly create and consume promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function() {
    console.log('Async 2 resolved');
})


const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Abhinav", email: "example@google.com"})
    }, 1000)
})
promise3.then(function(user) {
    console.log(user); // user has value that is written inside resolve
})


const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: 'Abhinav', password: '123'})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promise4
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error); // Error initialized as false above
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promise5 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({uesrname: 'Javascript', password: 'zik'})
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromise5()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()
//OR
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// Promise.all