let age: number = 20
let n: string = "Sree"
let isStudent: boolean = true
let num: number = 20
// num = "Twenty" ==> type conversion not possible in TypeScript, as it is a statically typed language.
num = 21 // can update a number value to num variable as it is of type number but cannot assign a string value t it.

function add(a: number, b: number) {
    console.log(a + b)
}
add(10, 20)

function sub(c: number, d: number): number {
    return c - d
}
console.log(sub(30, 10))

function displaydetails(price: number, brand: string): void {   // void given if no return value is expected from the function. If a return value is expected then we can specify the type of return value in place of void.
    console.log(brand + "," + price)
}
displaydetails(2500, "samsung")


// Array declaration in TypeScript

let mark: number[] = [50, 80, 75, 65, 40]
mark.push(90)
// mark.push("Sree") // Type conversion not possible as mark is of type number[] and cannot accept string values. 
console.log(mark)


//object
let user: { name: string, age: number, city: string } =
{name: "Sree", age: 20, city: "TVM"}
console.log(user)