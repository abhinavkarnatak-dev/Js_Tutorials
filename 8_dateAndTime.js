let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("2023-01-14")
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());

let myTimestamp = Date.now() // Current time
console.log(myTimestamp);
console.log(myCreatedDate2.getTime()); // Time of the date mentioned
console.log(Date.now()); // In mili sec
console.log(Math.floor(Date.now()/1000)); // In sec