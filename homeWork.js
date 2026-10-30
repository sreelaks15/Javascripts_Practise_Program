//home work 1: 06/10/2026
//calculate salary of employee : Object creation

console.log("*****************************************************");
const employee = {
    empName: "Lakshmi",
    empID: 12079,
    empBasicSalary: 30000,
    empPF: 12,
    pfAmount: 0,
    calculatePf: function () {
        this.pfAmount = (this.empBasicSalary * this.empPF) / 100
        console.log("PF contribution is Rs. " + this.pfAmount)
    },
    calculateSalary: function () {
        let netSalary = this.empBasicSalary - this.pfAmount
        console.log("Salary is Rs. " + netSalary)
    }
}
employee.calculateSalary()
//looping
for (let key in employee) {
    if (typeof employee[key] == "function") {
        //  console.log(key + ":" )
        employee[key]()
    }
    else {
        console.log(key + ":" + employee[key])
    }
}
console.log("*****************************************************");

// homework 2 07/10.2026
// Create a function name printDetails and print all the datas
function printDetails() {
    let name = "Sreelakshmi"
    let job = "Test Engineer"
    let company = "Speridian Technologies"
    console.log("My Name is " + name)
    console.log("Iam a " + job)
    console.log("I work with company " + company)
}
printDetails()
console.log("*****************************************************");

//homework 3 => 09/10/2026

//Create a student class and print student details using class

class student {
    constructor(name, age, mark) {
        this.name = name
        this.age = age
        this.mark = mark
    }
    display() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.mark)
    }
}
const studentobj = new student("Name : Aashvi", "Age : 8", "Mark : 100")
studentobj.display()

console.log("*****************************************************");


//29-10-2026
//1. Can you write a JavaScript code to find the total price of all items
//in this shopping cart array using the reduce() method?
// How do you filter out products that cost more than 500 rupees from an array of objects


let price = [200, 500, 2000, 3500, 1000, 20000]
const totalPrice = price.reduce((total,value)=> total + value)
console.log(totalPrice)

const filter = price.filter((value,index) => value > 500)
console.log("Cost of products more that Rs. 500 is " + filter)

console.log("*****************************************************");

// 2. Create a base class Character with an attack() method.
//  Then create subclasses like Warrior, Mage, and Archer that override the attack() method
//  to perform different types of attacks (e.g., sword, magic, arrow)."




