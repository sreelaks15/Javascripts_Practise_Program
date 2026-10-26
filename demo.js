"use strict";
let age = 20;
let n = "Sree";
let isStudent = true;
let num = 20;
// num = "Twenty" ==> type conversion not possible in TypeScript, as it is a statically typed language.
num = 21; // can update a number value to num variable as it is of type number but cannot assign a string value t it.
function add(a, b) {
    console.log(a + b);
}
add(10, 20);
function sub(c, d) {
    return c - d;
}
console.log(sub(30, 10));
function displaydetails(price, brand) {
    console.log(brand + "," + price);
}
displaydetails(2500, "samsung");
// Array declaration in TypeScript
let mark = [50, 80, 75, 65, 40];
mark.push(90);
// mark.push("Sree") // Type conversion not possible as mark is of type number[] and cannot accept string values. 
console.log(mark);
//object
let user = { name: "Sree", age: 20, city: "TVM" };
console.log(user);
