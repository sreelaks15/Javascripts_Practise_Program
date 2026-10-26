//for loop
//Syntax
/*for(initialize;comditiom;updation){
//code
}*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*i=1 1<=5  2    1 primt
2<5  3     2 print
3<5 4 3 print
4<=5 5 4print
5<=5 6 5 print
6<=5  break*/
console.log("**********************************************")
for (let j = 1; j <= 10; j++) {
    console.log("Welcome")
}
console.log("**********************************************")
for (let j = 0; j <= 9; j++) {
    console.log(j)
}
console.log("**********************************************")
for (let i = 5; i >= -5; i--)
    console.log(i)

console.log("**********************************************")
//While loop
/* initiialze:
while(condition){
i++
}*/

let count = 0;
while (count < 3) {
    console.log(count)
    count++;
}

console.log("**********************************************")
// 
let password = "12345"
let enteredPassword ="123";
while(password!==enteredPassword)
{
    console.log("Enter valid password")
    enteredPassword = "12345";
    console.log("logged in successfully")
}
console.log("**********************************************")
//do while
//syntax
/*do{
}while(condition)*/

let k =10;
do{
    console.log(k);
    k++;
}
while(k<15)
  console.log("**********************************************")

let j = 1;
while(j<=10)
{
    if(j>=3)
    {
        break;
    }
    console.log(j);
    j++;
}