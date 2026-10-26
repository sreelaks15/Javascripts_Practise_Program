class car {

    constructor(color, brand) {
        console.log("Constructor calling")   //constructo invokes first
        this.color = color
        this.brand = brand
    }
    drive() {
        console.log("Drive a car")  // drive is a method // class name = car
    }
    start() {
        console.log("Start a car")
    }
    display() {
        console.log(this.brand)
        console.log(this.color)

    }
}
const carobj = new car("Blue", "Hyundai")     //new = keyword // default constructor car()
carobj.drive()
carobj.start()
carobj.display()


const carobj1 = new car("Black", "Rolls Royce")
carobj1.display()