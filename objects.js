const person = {
    name: "Sree",
    lastName: "Lakshmi",
    age: 15,
    isEmployed: true,
    //fullName:function(){console.log(this.name+this.lastName)} // "this" is used to refer objects of variable 
}
console.log(person)
console.log("*****************************************************");
console.log(person.name)  //dot notation
console.log("*****************************************************");
console.log(person["age"]) //bracket notation
console.log("*****************************************************");
person.city = "Trivandrum"
console.log(person) // to add new object
console.log("*****************************************************");
person.name = "Sreelakshmi" // to update
console.log(person)
console.log("*****************************************************");
delete person.isEmployed  //to delete and object
console.log(person)
console.log("*****************************************************");
/*person.fullName()
console.log(person)*/
console.log("*****************************************************");
for (let key in person) {
    console.log(key + ":" + person[key])
}

console.log("*****************************************************");

const student = {
    name: "Sree",
    class: 5,
    greet: function () { console.log("Goodmorning " + this.name) }
}
student.greet()

//looping
for (let key in student) {
    if (student[key] == "function") {
        console.log(key())
    }
    else
    {
        console.log(key + ":" + student[key])
    }
}
//Home work ==> calculate salary of an employee
console.log("*****************************************************");
const employee = {
empName:"Lakshmi",
empID:12079,
empBasicSalary :30000,
empPF:12,
calculateSalary: function(){console.log("PF contribution is Rs. " + this.empBasicSalary * this.empPF/100)}
}
employee.calculateSalary()
//looping
for (let key in employee){
    if(typeof employee[key]=="function"){
      //  console.log(key + ":" )
        employee[key]()
    }
    else
    {
        console.log(key + ":" + employee[key])
    }
}