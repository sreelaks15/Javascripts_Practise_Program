//arithemic operators
//  +,-,*,/,%(mode),**(power)

//Addition
let a = 10;
let b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // remainder
console.log(a**b); // power

// Assignment operator
// =,+=,-=,*=

let x = 10
x= x+10;
console.log(x)

x+=5;
console.log(x)

x-=5
console.log(x)

x*=5
console.log(x)

x/=5
console.log(x)

// =====================================
//Comparison operators or relational operatots -- returns boolean value
//  ==,===,!=,!==,>,<,>=,<=

let m = 3
let y = 5
console.log(a==b)
let f = "5" 
console.log(y==f)  // checks only value -- loose equality
console.log(y===f) // checks both value and type thats why its false -- Strict equality
console.log(y!=f) // checks only value because -- simple not equals
console.log(y!==f) //strict not equals
console.log(y>f)
console.log(m>f)
console.log(y<f)
console.log(m<f)
console.log(y>=f)
console.log(y<=f)


//Logical Operator
// &&,||,!  -- conditional operators
let age = 22
let hasLicense = true
let canDrive = (age>=18) && (hasLicense)
console.log("Can I Drive?  " + canDrive)    //concat
console.log(y+f) //concat opertor

//OR Operator
let age2 = 16;
let hasLicense2 = false
let canDrive2 = (age2>=18) || (hasLicense2)
console.log("Can I Drive?",canDrive2)   //concat only but space comes automatically . if given plus for concat extra space need to give
console.log(!hasLicense2)