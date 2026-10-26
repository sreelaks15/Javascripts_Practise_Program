//funtions without parameter

function addition() {
    let a = 50
    let b = 25
    let c = a + b;
    console.log(c)
}
addition()
console.log("****************************************************")
//substraction //Function with parameters
function substraction(a, b) {
    let result = a - b
    console.log(result)
}
substraction(50, 20)
substraction(95, 45)

console.log("****************************************************")
//function with return type
function multiplication(c, d) {
    let output = c * d
    return output
}
console.log(multiplication(5, 4))

console.log("****************************************************")
let abc = multiplication(20, 8)
console.log(abc)
console.log("****************************************************")
// anonymous function
const x = function () {
    console.log("From Anonymous function")
}
x()
console.log("****************************************************")
//Arrow function

// Syntax : ()=>{}

const display = function(a,b){
return a+b
}
console.log(display(20,30))
let st = console.log(display(30,30))

//Arrow function example for the same above
const arrow = (x,y)=>{return x + y}
console.log(arrow(2,3))


