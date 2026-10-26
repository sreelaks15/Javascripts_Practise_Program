
class fruitsInheritance{                    //parent class
    constructor(color, taste){
        this.color = color
        this.taste = taste
    }
    isRipe(){
        console.log("Fruits function")
        console.log(this.color)
        console.log(this.taste)
    }

}
module.exports = fruitsInheritance