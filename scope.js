//Var
if (true){
    var x = "Iam Var"  
    console.log(x)
}
console.log(x) // as its var , it can access from outside block

//Function
function testVar(){
    var y = " Iam var inside function"
    console.log(y)
}
testVar()
//console.log(y) // cant access outside function 

console.log("****************************************************")

if(true){
    let a = "Iam let inside block"
    console.log(a)
    const b = "Iam const inside block"
    console.log(b)
}
// console.log(a) // let is block scope can be accessed only within block
// console.log(b) // const is block scope can be accessed only within block


console.log("****************************************************")

var userName = "Sreelakshmi"  // Global Scope == > can access everywhere
function scopeTest(){
    console.log(userName)   // prints output as its a global scope
    var userAge = 10
    if(true){
        let userCity = "Tvm"
        var userRole = "Manager"
        const country = "India"
        console.log(userName) // prints output as its a global scope
        console.log(userCity) //prints output as its within a block
        console.log(userRole)//prints output as its within a block
        console.log(country)//prints output as its within a block
        console.log(userAge) // displays output as its inside the function
    }
    console.log(userName) // prints output as its a global scope
      // console.log(userCity) // wont prints output as its outside a block & let
       console.log(userRole)//prints output as its var eventhough its outside block
      // console.log(country)//wont prints output as its outside a block & const
      console.log(userAge) // prints output as its var eventhough its outside block
}
scopeTest()
console.log(userName) // prints output as its a global scope

        // console.log(userCity) //wont prints output as its outside a block
        // console.log(userRole)//wont prints output as its outside a block
       //  console.log(country)//wont prints output as its outside a block
       // console.log(userAge)//wont prints output as its outside a function

// Var prints output within block, outside block
// let prints output within block
//const prints within block 