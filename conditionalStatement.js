
// Syntax
//if(condition){
//code tobe excute
//}
//age >12 - permission to enter requestIdleCallback
let age = 50;
/*if(age>12)
{
    console.log("You are eligible");
}
else
{
    console.log("You are not eligible");
}*/

/*
if(condition){
    
/code tobe excute
}
//else if(condition2)
//{}
//else
//{}*/

//age<12;
if (age < 12) {
    console.log("you are not eligible, You are too young");
}
else if (age >= 50) {
    console.log("you are not eligible, you are above 50 year old");
}
else {
    console.log("you are eligible");
}

//switch
//Syntax
/*switch(exprn)
{
case 1:

case2:




case n:


default:
}*/

//variable day = 1 to 7 
let day = 10;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

//variable letter 

let letter = "a";
switch (letter) {
    case "a":
        console.log("letter is vowel");
        break;
    case "e":
        console.log("letter is vowel");
        break;
    case "i":
        console.log("letter is vowel");
        break;
    case "o":
        console.log("letter is vowel");
        break;
    case "u":
        console.log("letter is vowel");
        break;
    case "A":
        console.log("letter is vowel");
        break;
    case "E":
        console.log("letter is vowel");
        break;
    case "I":
        console.log("letter is vowel");
        break;
    case "O":
        console.log("letter is vowel");
        break;
    case "U":
        console.log("letter is vowel");
        break;
    default:
        console.log("letter is not a vowel");
}

//grouping of case

let alphabet = "b";
switch (alphabet) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("letter is vowel");
        break;
    default:
        console.log("letter is not a vowel");
}

//ternary operator
let mark = 10
const result = (mark>=18)?"pass":"failed"
console.log(result);