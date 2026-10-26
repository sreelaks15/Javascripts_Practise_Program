// import { fruitsInheritance } from "./fruitsInheritance.js"
const fruitsInheritance = require('./fruitsInheritance.js')
//child class
class appleInheritance extends fruitsInheritance{
constructor(color, taste, variety){
     //  this.color = color
       //this.taste = taste
        super(color,taste)
        this.variety = variety
    }
    isSweet(){
        console.log("Apple Function")
        console.log(this.color)
        console.log(this.taste)
        console.log(this.variety)

    }
}

const apple = new appleInheritance("red", "sweet", "pinklady")
apple.isSweet()
apple.isRipe()

const myFruits = new fruitsInheritance("green","sour")
myFruits.isRipe() //can access as its from parent class 
// myFruits.isSweet() // cant access as its child's property so parent cant access child's ppty