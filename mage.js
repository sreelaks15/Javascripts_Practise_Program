const character = require('./character.js')


class mage extends character {
    attack() {
        console.log("Mage attacks using Magic")
    }

}

module.exports = mage