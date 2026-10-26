//import { employee } from "./employeePoly.js"
const employeePoly = require('./employeePoly.js')
class trainerPoly extends employeePoly
{
    constructor(name){
        super()
        this.name = name
    }

        getRole(){
            //console.log(this.name + "is a Software Trainer")
            console.log(`${this.name} is a Software Trainer`)  // template literal -- another way to concat
        }
}
const newtrainerpoly = new trainerPoly("Sree")
newtrainerpoly.getRole()

const newEmployee = new employeePoly("Lakshmi")
newEmployee.getRole()