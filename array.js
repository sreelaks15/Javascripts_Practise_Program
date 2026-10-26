let fruits = ["apple", "orange", "banana", "pineapple", "dragonfruit", "kiwi"];
console.log(fruits);
console.log(fruits[1]); // to select particular element from array
console.log(fruits.length); // to get the length of the array
fruits.push("mango") // add a new element to the last of the array
console.log(fruits);
fruits.pop() // remove element from end
console.log(fruits);
fruits.unshift("grape"); // to add  element from start
console.log(fruits);
fruits.shift(); // to remove start element
console.log(fruits);
console.log("*****************************************************");

//for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

console.log("*****************************************************");
console.log("looping array using for of")
for (let fruit of fruits) {
    console.log(fruit);
}
console.log("*****************************************************");

console.log(fruits.includes("banana")) // to chech whether an element is there or not
console.log(fruits.includes("mango"))

console.log(fruits.indexOf("banana")) // to check the index of an element

let slicedArray = fruits.slice(2, 5)
console.log(slicedArray)

//splice(start,deletecount,newItem)

fruits.splice(1, 0, "grape") // delete nothing and add from index 1
console.log(fruits)

fruits.splice(1, 2, "watermelon", "papaya") // delete 2 and add 2 from index 1
console.log(fruits)

fruits.splice(1, 1) //delete element in index 1 and not adding anything new
console.log(fruits)
console.log("*****************************************************");

//Concat

let vegetable = ["tomato", "cucumber"];
let newArray = fruits.concat(vegetable);
console.log(newArray)
let newArray1 = vegetable.concat(fruits);
console.log(newArray1)
console.log("*****************************************************");

let n = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < n.length; i++) {
    //sum = sum + n[i];
    sum += n[i];
}
console.log(sum) // printed outside to get overall sum 
console.log("*****************************************************");

//reduce method
const sumArray = n.reduce((total, value) => total + value, 0) // 0 is considered as initial value
console.log(sumArray)

const sumArray1 = n.reduce((total, value) => total + value, 5)  // to add 5 to the total 
console.log(sumArray1)

// normal loop method
let filterEven = [];

for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        filterEven.push(n[i])
    }
}
console.log(filterEven)

//using filter method  ==> to filter out even number
const filterArray = n.filter((value, index) => value % 2 == 0)
console.log("Even number" + filterArray)

// map method ==> to do some changes to entire array

console.log("*****************************************************");
const doubleArray = n.map((value) =>value*2)  // to double the entire array
console.log(doubleArray);
console.log("*****************************************************");
//Activity  ==? filter odd numbers and then map( 5*array)
let x = [9,8,7,6,5,4];
const filterAndMap = x.filter((value, indec)=>value % 2!=0).map((value)=>value*5).reduce((total,value)=>total+value)
console.log(filterAndMap);