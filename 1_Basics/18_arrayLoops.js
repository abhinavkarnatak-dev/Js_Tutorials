// for-of loop (doesn't work on objects)
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
// Maps - datatype (key-value pair, unique values)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// for-in loop (works on objects)
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    console.log(key, ':- ', myObject[key]);
}

// for-each loop
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (item) { // Callback function has no name
    console.log(item);
} )
coding.forEach( (item, index, arrList) => {
    console.log(item, index, arrList);
})