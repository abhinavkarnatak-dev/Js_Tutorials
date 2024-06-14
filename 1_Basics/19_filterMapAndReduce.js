// filter
const arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]

const newArr = arr.filter( (num) => num > 4)
const newArr1 = arr.filter( (num) => { return num > 4 })
console.log(newArr);
console.log(newArr1);

// Map
const arr1 = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
const mapArr = arr1.map( (val) => val + 10)
console.log(mapArr);

// Chaining
const arr2 = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
const chainArr = arr2
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(chainArr);

// Reduce
const arr3 = [1, 2, 3]
const total = arr3.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // 0 is initial value
const total1 = arr3.reduce( (acc, currval) => acc + currval, 0)
console.log(total);
console.log(total1);