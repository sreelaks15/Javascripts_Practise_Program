const character = require('./character.js')


class warrior extends character {
    attack() {
        console.log("Warrior attacks with a sword")
    }
}


module.exports = warrior
