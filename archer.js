const character = require('./character.js')
const warrior = require('./warrior.js')
const mage = require('./mage.js')

class archer extends character{
    attack(){
        console.log("Archer attacks with an arrrow")
    }
}

const newwarrior = new warrior()
const newmage = new mage()
const newarcher = new archer()

newwarrior.attack()
newmage.attack()
newarcher.attack()